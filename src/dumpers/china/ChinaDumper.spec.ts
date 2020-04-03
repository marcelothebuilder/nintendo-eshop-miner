/* eslint-disable @typescript-eslint/camelcase */
import { expect } from "chai";
import { describe, it, afterEach, setup } from "mocha";
import sinon from "sinon";
import moxios from "moxios";
import { ChinaDumper, AxiosInstance } from "./ChinaDumper";
import { checkAndNotify } from "../../testing/checkAndNotify";

describe("ChinaDumper", () => {
  afterEach(() => sinon.restore());

  setup(async () => {
    moxios.install(AxiosInstance);
  });

  it("should be created successfully", () => {
    // eslint-disable-next-line no-new
    const instance = new ChinaDumper();
    expect(instance).to.be.instanceOf(ChinaDumper);
  });

  it("getFullDump should fetch and parse items", (done) => {
    const dumpSpy = sinon.spy();
    const instance = new ChinaDumper();
    // perform request
    const promise = instance.getFullDump().then(dumpSpy);
    moxios.wait(async () => {
      const requestResponse = moxios.requests.mostRecent();
      requestResponse.respondWith({
        response: [
          {
            r_date: 43728,
            release_date: "2019.9.20",
            r_date_tw: "",
            release_date_tw: "",
            title: "薩爾達傳說 織夢島",
            title_sc: "塞尔达传说 织梦岛",
            sale_until: "",
            pickup: 1,
            only_for: "",
            media: "package",
            lang: "CN",
            maker_publisher: "Nintendo",
            thumb_img: "zelda_links_awakening.jpg",
            thumb_img_sc: "zelda_links_awakening_sc.jpg",
            thumb_img_tw: "",
            link: "/switch/zelda_links_awakening/",
            link_sc: "",
            link_tw: "",
            link_target: "",
            platform: "Nintendo Switch",
            rating: 6,
            adult_hk: "",
            category: "動作冒險",
            category_sc: "动作冒险",
            copyright: "©1993-2019 Nintendo",
            copyright_sc: "",
            memo1: "盒裝版早期購買特典「螢幕擦拭」",
            memo2: "※數量有限，送完即止。",
            memo1_sc: "盒裝版早期購買特典「萤幕擦拭」",
            memo2_sc: "※数量有限，送完为止。",
            memo1_tw: "早期購買特典「螢幕擦拭」",
            memo2_tw: "※數量有限，送完為止。",
            product_code: "\r\nHACPAR3NA",
            item_code: "",
            price: "",
          },
        ],
      });
      await promise;

      // assertions
      checkAndNotify(() => {
        expect(dumpSpy.lastCall.lastArg).to.be.deep.equal([
          {
            r_date: 43728,
            release_date: new Date(Date.UTC(2019, 9 - 1, 20)),
            r_date_tw: null,
            release_date_tw: null,
            title: "薩爾達傳說 織夢島",
            title_sc: "塞尔达传说 织梦岛",
            sale_until: null,
            pickup: 1,
            only_for: null,
            media: "package",
            lang: "CN",
            maker_publisher: "Nintendo",
            thumb_img: "zelda_links_awakening.jpg",
            thumb_img_sc: "zelda_links_awakening_sc.jpg",
            thumb_img_tw: null,
            link: "/switch/zelda_links_awakening/",
            link_sc: null,
            link_tw: null,
            link_target: null,
            platform: "Nintendo Switch",
            rating: 6,
            adult_hk: null,
            category: "動作冒險",
            category_sc: "动作冒险",
            copyright: "©1993-2019 Nintendo",
            copyright_sc: null,
            memo1: "盒裝版早期購買特典「螢幕擦拭」",
            memo2: "※數量有限，送完即止。",
            memo1_sc: "盒裝版早期購買特典「萤幕擦拭」",
            memo2_sc: "※数量有限，送完为止。",
            memo1_tw: "早期購買特典「螢幕擦拭」",
            memo2_tw: "※數量有限，送完為止。",
            product_code: "\r\nHACPAR3NA",
            item_code: null,
            price: null,
          },
        ]);
      }, done);
    });
  });
});
