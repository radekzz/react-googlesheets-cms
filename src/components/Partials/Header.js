import React from "react";

const Header = () => {
  const topStyle = {
    boxShadow: "none"
  };
  const toplStyle = {
    marginTop: "7px"
  };

  return (
    <React.Fragment>
      <link
        href="https://ir.ebaystatic.com/rs/v/0340xsues2yohfv2knr3ezuqj2k.css"
        type="text/css"
        rel="stylesheet"
      />
      <div className="gh-acc-exp-div gh-hide-if-nocss">
        <a id="gh-hdn-stm" className="gh-acc-a" href="#mainContent">
          Skip to main content
        </a>
      </div>
      {/*[if lt IE 9]><div id="gh" role="banner" class="gh-IE8 gh-flex gh-pre-js gh-w "><![endif]*/}
      {/*[if (gte IE 9)|!(IE)]><!*/}
      <header id="gh" role="banner" className="gh-flex gh-pre-js gh-w ">
        {/*<![endif]*/}
        <table className="gh-tbl">
          <tbody>
            <tr>
              <td className="gh-td">
                {/*[if lt IE 9]><a href="https://www.ebay.com/"  _sp="m570.l2586" id="gh-la">eBay<img role="presentation"  width=117 height=120 style='clip:rect(47px, 118px, 95px, 0px); position:absolute; top:-47px;left:0'  alt="" src="https://ir.ebaystatic.com/rs/v/apstidvcvu5pxlbxkphrrdo5iqv.png" id="gh-logo"></a><![endif]*/}
                {/*[if (gte IE 9)|!(IE)]><!*/}
                <a href="https://www.ebay.com/" _sp="m570.l2586" id="gh-la">
                  eBay
                  <img
                    width={250}
                    height={200}
                    style={{
                      clip: "rect(47px, 118px, 95px, 0px)",
                      position: "absolute",
                      top: "-47px",
                      left: 0
                    }}
                    alt=""
                    src="https://ir.ebaystatic.com/rs/v/fxxj3ttftm5ltcqnto1o4baovyl.png"
                    id="gh-logo"
                  />
                </a>
                {/*<![endif]*/}
              </td>
              <td className="gh-td">
                <div id="gh-shop" className="gh-hide-if-nocss">
                  <button
                    id="gh-shop-a"
                    aria-expanded="false"
                    className="gh-control"
                    aria-controls="gh-sbc-o">
                    Shop by category
                    <i id="gh-shop-ei" className="gh-sprRetina" />
                  </button>
                  <div id="gh-sbc-o">
                    <h2 className="gh-ar-hdn">Shop by category</h2>
                  </div>
                </div>
              </td>
              <td className="gh-td-s">
                <form
                  id="gh-f"
                  method="get"
                  action="https://www.ebay.com/sch/i.html">
                  <input type="hidden" defaultValue="R40" name="_from" />
                  <input
                    type="hidden"
                    name="_trksid"
                    defaultValue="m570.l1313"
                  />
                  <table className="gh-tbl2">
                    <tbody>
                      <tr>
                        <td className="gh-td-s">
                          <div id="gh-ac-box">
                            <div id="gh-ac-box2">
                              <label htmlFor="gh-ac" className="gh-ar-hdn">
                                Enter your search keyword
                              </label>
                              <input
                                type="text"
                                className="gh-tb ui-autocomplete-input"
                                size={50}
                                maxLength={300}
                                placeholder="Search..."
                                id="gh-ac"
                                name="_nkw"
                                autoCapitalize="off"
                                autoCorrect="off"
                                spellCheck="false"
                                autoComplete="off"
                              />
                            </div>
                          </div>
                        </td>
                        <td className="gh-td" id="gh-cat-td">
                          <div id="gh-cat-box">
                            <select
                              title="Select a category for search"
                              className="gh-sb gh-sprRetina"
                              size={1}
                              id="gh-cat"
                              name="_sacat">
                              <option selected="selected" defaultValue={0}>
                                All Categories
                              </option>
                            </select>
                          </div>
                        </td>
                        <td className="gh-td">
                          <input
                            type="submit"
                            className="btn btn-prim gh-spr"
                            id="gh-btn"
                            defaultValue="Search"
                          />
                        </td>
                        <td className="gh-td" id="gh-as-td">
                          <a
                            title="Advanced Search"
                            href="https://www.ebay.com/sch/ebayadvsearch"
                            _sp="m570.l2614"
                            id="gh-as-a">
                            Advanced
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
        <div id="gh-top" style={topStyle} className="gh-hide-if-nocss">
          <ul id="gh-topl" style={toplStyle}>
            <li className="gh-t gh-spr " id="gh-eb-u">
              <noscript className="gh-t gh-spr">
                Hi (&lt;a
                href="https://signin.ebay.com/ws/eBayISAPI.dll?SignIn&amp;amp;_trksid=m570.l3348"&gt;Sign
                in&lt;/a&gt; to bid or buy)
              </noscript>
            </li>
            <li className="gh-t gh-spr " id="gh-p-1">
              <a
                href="https://deals.ebay.com/"
                _sp="m570.l3188"
                className="gh-p">
                Daily Deals
              </a>
            </li>
            <li className="gh-t gh-spr " id="gh-p-4">
              <a
                href=" https://www.ebay.com/rpp/gift-cards"
                _sp="m570.l6463"
                className="gh-p">
                Gift Cards
              </a>
            </li>
            <li className="gh-t gh-spr " id="gh-p-3">
              <a
                href="https://ocsnext.ebay.com/ocs/home"
                _sp="m570.l1545"
                className="gh-p">
                Help &amp; Contact
              </a>
            </li>
            <li className="gh-t gh-spr gh-hdn" id="gh-ti">
              <a
                href="https://www.ebay.com/rpp/summer"
                _sp="m570.l2611"
                id="gh-doodleS">
                <img
                  src="https://ir.ebaystatic.com/pictures/aw/mops/2017_DoodleImages/04353SumDood_BrndDdl_SmallDoodle.jpg"
                  id="gh-hsi"
                  height={30}
                  width={150}
                  alt="All Things Fun Under the Sun"
                  title="All Things Fun Under the Sun"
                />
              </a>
            </li>
          </ul>
          <ul id="gh-eb">
            <li id="gh-p-2" className="gh-eb-li gh-t-rt gh-spr">
              <a
                href="https://www.ebay.com/sl/sell"
                _sp="m570.l1528"
                className="gh-p">
                Sell
              </a>
            </li>
            <li
              id="gh-eb-My"
              className="gh-eb-li gh-hvr gh-dd rt"
              data-imp={10}>
              <div className="gh-menu">
                <a
                  href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbay&gbh=1"
                  _sp="m570.l2919"
                  className="gh-eb-li-a">
                  My eBay
                </a>
                <a
                  href="#gh-eb-My"
                  role="button"
                  aria-expanded="false"
                  aria-controls="gh-eb-My-o"
                  className="gh-acc-exp-a gh-acc-a2
  gh-control">
                  Expand My eBay
                </a>
                <div className="gh-submenu gh-eb-o" id="gh-eb-My-o">
                  <ul role="navigation">
                    <li>
                      <a
                        href="https://www.ebay.com/myb/Summary"
                        _sp="m570.l1533"
                        className="gh-eb-oa thrd">
                        Summary
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ebay.com/myb/BidsOffers"
                        _sp="m570.l1535"
                        className="gh-eb-oa thrd">
                        Bids/Offers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ebay.com/myb/WatchList"
                        _sp="m570.l1534"
                        className="gh-eb-oa thrd">
                        Watch list
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&CurrentPage=MyeBayNextListIndex&wl=1"
                        _sp="m570.l3067"
                        className="gh-eb-oa thrd">
                        Wish list
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbayBeta&CurrentPage=MyeBayNextListIndex&tagId=-100&ssPageName=STRK:ME:LNLK:MESINDXX"
                        _sp="m570.l2618"
                        className="gh-eb-oa thrd">
                        All lists
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ebay.com/myb/PurchaseHistory"
                        _sp="m570.l1536"
                        className="gh-eb-oa thrd">
                        Purchase history
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbay&gbh=1&CurrentPage=MyeBayAllSelling&ssPageName=STRK:ME:LNLK:MESX"
                        _sp="m570.l1537"
                        className="gh-eb-oa thrd">
                        Selling
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.ebay.com/cln/_mycollections"
                        _sp="m570.l4780"
                        className="gh-eb-oa thrd">
                        My Collections
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://my.ebay.com/ws/eBayISAPI.dll?MyEbay&gbh=1&CurrentPage=MyeBayAllFavorites"
                        _sp="m570.l1538"
                        className="gh-eb-oa thrd">
                        Followed searches
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mesg.ebay.com/mesgweb/ViewMessages/0"
                        _sp="m570.l1539"
                        className="gh-eb-oa thrd">
                        Messages
                      </a>
                    </li>
                    <li id="gh-eb-sub-li-cpn" />
                  </ul>
                </div>
              </div>
            </li>
            <li id="gh-eb-Alerts" className="gh-eb-li gh-hvr gh-layer rt">
              <div className="gh-menu">
                <button
                  className="gh-control ghn-b gh-eb-li-a"
                  aria-expanded="false"
                  aria-controls="gh-eb-Alerts-o">
                  <i id="gh-Alerts-i" className="gh-sprRetina">
                    Notification
                  </i>
                </button>
                <div className="gh-sublayer">
                  <div
                    id="gh-eb-Alerts-o"
                    className="gh-eb-o"
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </li>
            <li id="gh-cart" className="gh-eb-li  rt">
              <a
                href="https://cart.payments.ebay.com/sc/view"
                _sp="m570.l2633"
                title="Your shopping cart"
                className="gh-eb-li-a">
                <i id="gh-cart-i" className="gh-sprRetina " />
              </a>
            </li>
          </ul>
        </div>
        {/*[if lt IE 9]></div><![endif]*/}
        {/*[if (gte IE 9)|!(IE)]><!*/}
      </header>
      {/*<![endif]*/}
      {/*ts:2017.07.07.05:21*/}
      {/*rq:*/}
      {/*rvr:108c*/}
    </React.Fragment>
  );
};

export default Header;
