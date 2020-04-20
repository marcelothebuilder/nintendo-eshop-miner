import { expect } from "chai";
import { afterEach, describe, it } from "mocha";
import sinon from "sinon";
import { Translation } from "../data/mongo/Translation";
import { CachedTranslationService } from "./cacheTranslation";
import { TranslationService } from "./TranslationService";

describe("cacheTranslation", () => {
  afterEach(() => sinon.restore());

  it("should be call service, request translation then save successfully", async () => {
    // eslint-disable-next-line no-new
    const findStub = sinon.stub(Translation, "findBy").resolves(null);
    const saveStub = sinon.stub().resolves(null);
    sinon.stub(Translation, "of").returns({ save: saveStub } as any);
    const translateSpy = sinon.stub(TranslationService.prototype, "translate").resolves({
      text: "NARUTO Shippuden Ultimate Storm 4 ROAD TO BORUTO",
      from: {
        language: { didYouMean: false, iso: "ja" },
        text: { autoCorrected: false, value: "", didYouMean: false },
      },
      raw: "",
    });

    await CachedTranslationService.translate("ＮＡＲＵＴＯ－ナルト－ 疾風伝　ナルティメットストーム４ ROAD TO BORUTO", {
      to: "en",
      from: "auto",
    });

    expect(findStub.callCount).to.be.eq(1);
    expect(translateSpy.callCount).to.be.eq(1);
    expect(saveStub.callCount).to.be.eq(1);
  });

  it("should return cached translation", async () => {
    sinon.stub(Translation, "findBy").resolves({ response: "test" } as any);
    const r = await CachedTranslationService.translate(
      "ＮＡＲＵＴＯ－ナルト－ 疾風伝　ナルティメットストーム４ ROAD TO BORUTO",
      {
        to: "en",
        from: "auto",
      },
    );

    expect(r).to.be.eq("test");
  });
});
