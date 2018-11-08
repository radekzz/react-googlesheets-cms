import React, { Component } from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
export default class SingleSeller extends Component {
  render() {
    const props = this.props.template;

    const dateStartDate = this.props.dateTextformat(props.startdate).date;
    const dateStartDay = this.props.dateTextformat(props.startdate).dateDay;
    const dateEndDate = this.props.dateTextformat(props.enddate).date;
    const dateEndDay = this.props.dateTextformat(props.enddate).dateDay;
    const timeStart = this.props.militaryToAmPm(props.starttime);
    const timeEnd = this.props.militaryToAmPm(props.endtime);
    const redemptionCapital = props.redemptions.replace(/\b\w/g, l =>
      l.toUpperCase()
    );

    function addEditable(currentField) {
      var selectedClass = "editable-field";
      if (currentField.includes(props.highlight)) {
        selectedClass = "highlighted-editable-field";
      }
      return selectedClass;
    }
    return (
      <React.Fragment>
        <div id="gh-gb_skinny" />
        <div className="ski-glbheader ski-glbheader--960">
          <Header />
        </div>
        <main className="ski-main">
          <div className="ski-container--960">
            <section className="ski-container--960 ski-terms--simple">
              <h1>
                <span className={addEditable("title")}>{props.title}</span>{" "}
              </h1>
              <h2>Redeeming your coupon</h2>
              <p>
                This coupon is a{" "}
                <span className={addEditable("discountvalue")}>
                  {props.discountvalue}%
                </span>{" "}
                discount valid from{" "}
                <span className={addEditable("starttime")}>{timeStart}</span> UK
                local time on{" "}
                <span className={addEditable("startdate")}>
                  {`${dateStartDay} ${dateStartDate}`}
                </span>{" "}
                until <span className={addEditable("endtime")}>{timeEnd}</span>{" "}
                UK local time on{" "}
                <span
                  className={addEditable(
                    "enddate"
                  )}>{`${dateEndDay} ${dateEndDate}`}</span>{" "}
                on purchases on eBay.co.uk from a selected seller, unless
                cancelled earlier in accordance with these Terms and Conditions.
              </p>
              <h2>How to redeem your coupon:</h2>
              <p>
                Simply make a purchase of{" "}
                <span className={addEditable("minspend")}>
                  &pound;
                  {props.minspend}
                </span>{" "}
                or more on eBay.co.uk from{" "}
                <span className={addEditable("sellers")}>{props.sellers} </span>
                and pay with PayPal, credit card, debit card, or PayPal Credit.
              </p>
              <p>
                Enter coupon code{" "}
                <span className={addEditable("couponid")}>
                  {props.couponid}
                </span>{" "}
                at checkout when prompted. The maximum discount you can receive
                is{" "}
                <span className={addEditable("maxdiscount")}>
                  &pound;
                  {props.maxdiscount}
                </span>{" "}
                per redemption and you are limited to{" "}
                <span className={addEditable("redemptions")}>
                  {props.redemptions}
                </span>{" "}
                {props.redemptions === "one" ? "redemption" : "redemptions"}.
              </p>
              <h2>Coupon Terms and Conditions:</h2>
              <ol>
                <li>
                  This offer is open to eBay.co.uk registered users, who must be
                  UK residents of 18 years of age or older. The shipping address
                  must also be a UK address.
                </li>
                <li>
                  {" "}
                  <span className={addEditable("redemptions")}>
                    {redemptionCapital}
                  </span>{" "}
                  coupon{" "}
                  {props.redemptions === "one" ? "redemption" : "redemptions"}{" "}
                  per registered user only. The coupon is valid from the date
                  you receive the coupon until the end date, unless cancelled
                  earlier in accordance with these Terms and Conditions.
                </li>
                <li>
                  This coupon is valid only when you pay with PayPal, credit
                  card, debit card, or PayPal Credit.
                </li>
                <li>
                  To redeem this coupon, a minimum Purchase Price of{" "}
                  <span className={addEditable("minspend")}>
                    &pound;
                    {props.minspend}
                  </span>{" "}
                  is required ("Purchase Price" means the total price of the
                  items you buy. It does NOT include related postage and packing
                  costs or any taxes which are not included in the item
                  price).&nbsp;
                </li>
                <li>
                  The coupon must be redeemed in a single transaction. When
                  using Cart, it can be used when purchasing from multiple
                  sellers. If your Purchase Price is less than the coupon
                  amount, you will lose the unused amount.
                </li>
                <li>
                  Enter coupon code{" "}
                  <span className={addEditable("couponid")}>
                    {props.couponid}
                  </span>{" "}
                  when you are prompted to during the payment process and you
                  will receive the related discount on the final amount of your
                  Purchase Price. The discount does not apply to the related
                  postage and packing costs or to any taxes which are not
                  included in the item price.
                </li>
                <li>
                  The &lsquo;Property&rsquo; and &lsquo;Cars, Motorcycles &amp;
                  Vehicles&rsquo; categories are always excluded.
                </li>
                <li>
                  The purchase you make to redeem this coupon must comply with
                  eBay&rsquo;s User Agreement and policies.
                </li>
                <li>
                  This coupon cannot be combined with any other coupon, site
                  discount, rebate, offer, gift coupon or other promotion.
                </li>
                <li>
                  This coupon has no cash value, cannot be transferred, cannot
                  be forwarded and cannot be exchanged.
                </li>
                <li>This coupon is void where prohibited.</li>
                <li>
                  Any refund you may be entitled to receive will not include the
                  coupon or its redemption value. You will receive no more than
                  the amount you paid towards your Purchase Price and will not
                  be eligible for a further coupon.
                </li>
                <li>
                  These Terms and Conditions are governed by the law of England
                  and Wales.
                </li>
                <li>
                  eBay makes no representations or warranties of any kind
                  regarding any product or service provided by any third party
                  in connection with any coupon promotion.
                </li>
                <li>
                  eBay will not be responsible for any third party's performance
                  or failure to perform any services related to any coupon
                  promotion, or for any costs, damages, accident, delay, injury,
                  loss, expense, or inconvenience that may arise in connection
                  with the use of the coupon, provided that nothing shall limit
                  eBay's liability for death or personal injury caused by its
                  negligence.
                </li>
                <li>
                  eBay reserves the right to suspend, change or cancel this
                  coupon promotion at any time, in the event of circumstances
                  arising which in eBay's opinion make it necessary for it to do
                  so. eBay reserves the right to add additional terms and
                  conditions for certain parts of this coupon promotion.
                </li>
                <li>
                  eBay (UK) Limited ("eBay") is the organiser of the promotion.
                  eBay may carry out this organisation through its local
                  subsidiaries.
                </li>
              </ol>
            </section>
          </div>
        </main>
        <div id="ski-foot">
          <div className="ski-foot-container ski-foot-container--960">
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
