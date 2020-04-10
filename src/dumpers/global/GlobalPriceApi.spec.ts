/* eslint-disable @typescript-eslint/camelcase */
import { expect } from "chai";
import { describe, it, setup, teardown } from "mocha";
import moxios from "moxios";
import sinon from "sinon";
import { GlobalPriceApi } from "./GlobalPriceApi";

interface Item {
  response?: any;
  responseText?: string;
  status?: number;
  statusText?: string;
  headers?: any;
}

describe("GlobalPriceApi", () => {
  const response = (obj: object): Item => ({
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    response: JSON.stringify(obj, null, 2),
  });

  // eslint-disable-next-line no-return-assign
  setup(() => moxios.install());

  teardown(() => moxios.uninstall());

  it("should be created successfully", () => {
    const g = new GlobalPriceApi();
    expect(g).to.be.instanceOf(GlobalPriceApi);
  });

  it("should fetch game price by id", (done) => {
    moxios.stubOnce(
      "GET",
      /.*/,
      response({
        personalized: true,
        country: "BR",
        prices: [
          {
            title_id: 1,
            sales_status: "onsale",
            regular_price: {
              amount: "R$ 250,79",
              currency: "BRL",
              raw_value: "250.79",
            },
          },
        ],
      }),
    );

    const responseSpy = sinon.spy();

    new GlobalPriceApi().getByIds("BR", [1]).then(responseSpy);

    moxios.wait(() => {
      expect(responseSpy.getCall(0).args[0].length).to.eq(1);
      done();
    });
  });

  it("should fetch in batches of 50", (done) => {
    const multiplyByMaxInteger = (n: number) => n * Number.MAX_SAFE_INTEGER;

    const ids = [...new Array(51)]
      .map(() => Math.random())
      .map(multiplyByMaxInteger)
      .map(Math.floor);

    const responseSpy = sinon.spy();

    new GlobalPriceApi().getByIds("BR", ids).then(responseSpy);

    moxios.wait(async () => {
      await moxios.requests.mostRecent().respondWith(
        response({
          personalized: false,
          country: "BR",
          prices: ids.slice(0, 50).map((id) => ({
            title_id: id,
            sales_status: "onsale",
            regular_price: {
              amount: "R$ 250,79",
              currency: "BRL",
              raw_value: "250.79",
            },
          })),
        }),
      );

      await moxios.requests.mostRecent().respondWith(
        response({
          personalized: false,
          country: "BR",
          prices: ids.slice(50, 51).map((id) => ({
            title_id: id,
            sales_status: "onsale",
            regular_price: {
              amount: "R$ 250,79",
              currency: "BRL",
              raw_value: "250.79",
            },
          })),
        }),
      );

      try {
        expect(responseSpy.getCall(0).args[0].length).to.eq(51);
        done();
      } catch (e) {
        done(e);
      }
    });
  });
});
