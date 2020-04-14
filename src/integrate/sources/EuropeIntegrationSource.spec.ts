/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { expect, assert } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { EuropeIntegrationSource } from "./EuropeIntegrationSource";
import { EuropeDumper } from "../../dumpers/europe/EuropeDumper";
import { readJSONSync } from "../../filesystem/readJSON";
import { IntegrationGame } from "../IntegrationSource";
import { EuropeanZeldaBreathOfTheWildNSUID } from "../../dumpers/global/GlobalPriceApi";

describe("EuropeIntegrationSource", () => {
  afterEach(() => sinon.restore());

  it("should return game", async () => {
    const botw = readJSONSync("resources/tests/dumpers/europe/EuropeDumper/botw-only.json").response.docs.pop();
    const dumper = new EuropeDumper("uk");
    sinon.stub(dumper, "getSwitchGames").resolves([botw]);

    const instance = EuropeIntegrationSource(dumper);
    const games = (await instance.next()).value! as IntegrationGame[];
    expect(games.length).to.be.deep.eq(1);
    const game = games.pop();
    expect(game?.nsuid).to.be.eq(EuropeanZeldaBreathOfTheWildNSUID);
    expect(game?.slug).to.be.eq("the-legend-of-zelda-breath-of-the-wild-switch");
    expect(game?.productCode).to.be.eq("AAAAA");
    assert.sameMembers(game?.uniqueIds || [], ["AAAAA", 70010000000023, "thelegendofzeldabreathofthewild"]);
  });
});
