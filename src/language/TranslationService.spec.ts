import { expect, assert } from "chai";
import { describe, it, afterEach } from "mocha";
import sinon from "sinon";
import { TranslationService } from "./TranslationService";

describe("TranslationService", () => {
  afterEach(() => sinon.restore());

  it("should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new TranslationService();
    expect(instance).to.be.instanceOf(TranslationService);
  });

  describe("when translating in bulk", () => {
    it("should translate a single item", async () => {
      const instance = new TranslationService();

      const translateStub = sinon.stub(instance, "translate").resolves({
        text: "Translation",
      } as any);

      instance.bulkTranslate(["Test"], { to: "en" });

      expect(translateStub.callCount).to.be.eq(1);
    });
  });

  describe("when translating in bulk", () => {
    it("should translate two items", async () => {
      const instance = new TranslationService(10);

      const translateStub = sinon
        .stub(instance, "translate")
        .onFirstCall()
        .resolves({
          text: "Saralelo",
        } as any)
        .onSecondCall()
        .resolves({
          text: "Saralela",
        } as any);

      const result = await instance.bulkTranslate(["Paralelo", "Paralela"], { to: "en" });

      expect(translateStub.callCount).to.be.eq(2);
      assert.sameOrderedMembers(Object.values(result), ["Saralelo", "Saralela"]);
    });

    it("should translate three items", async () => {
      const instance = new TranslationService(10);

      const translateStub = sinon
        .stub(instance, "translate")
        .onFirstCall()
        .resolves({
          text: "Saralelo",
        } as any)
        .onSecondCall()
        .resolves({
          text: "Saralela",
        } as any)
        .onThirdCall()
        .resolves({
          text: "Saralele",
        } as any);

      const result = await instance.bulkTranslate(["Paralelo", "Paralela", "Paralele"], { to: "en" });

      expect(translateStub.callCount).to.be.eq(3);
      expect(translateStub.firstCall.args[0]).to.be.eq("Paralelo");
      expect(translateStub.secondCall.args[0]).to.be.eq("Paralela");
      expect(translateStub.thirdCall.args[0]).to.be.eq("Paralele");
      assert.sameOrderedMembers(Object.values(result), ["Saralelo", "Saralela", "Saralele"]);
    });

    it("should translate two items at the same time", async () => {
      const instance = new TranslationService(25);

      const translateStub = sinon
        .stub(instance, "translate")
        .onFirstCall()
        .resolves({
          text: "Saralelo\nSaralela",
        } as any)
        .onSecondCall()
        .resolves({
          text: "Saralele",
        } as any);

      const result = await instance.bulkTranslate(["Paralelo", "Paralela", "Paralele"], { to: "en" });

      expect(translateStub.callCount).to.be.eq(2);
      expect(translateStub.firstCall.args[0]).to.be.eq("Paralelo\nParalela");
      expect(translateStub.secondCall.args[0]).to.be.eq("Paralele");
      assert.sameOrderedMembers(Object.values(result), ["Saralelo", "Saralela", "Saralele"]);
    });
  });
});
