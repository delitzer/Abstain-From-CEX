import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./timeline.css";

export default class timeline extends Component {
  render() {
    return (
      <div>
        <VerticalTimeline lineColor="#847577">
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#847577", color: "#fff" }}
            textClassName="timeline-text-element"
          >
            <h3 className="vertical-timeline-element-title">Mt. Gox</h3>
            <h4 className="date">November 2014</h4>
            <list className="list">
              <li>
                By 2013, just 3 years after launching, Mt. Gox was processing
                70% of all Bitcoin trades.
              </li>
              <li>
                On Feb 7th, 2014, Mt. Gox suspended Bitcoin withdrawals due to
                “technical problems”.
              </li>
              <li>
                On Feb 24th, 2014, Mt. Gox suspended all trading and the
                exchange’s website went offline. That same week, a document was
                leaked revealing that 744,408 BTC was stolen from customers due
                to poor security measures and another 100,000 BTC was also
                missing.
              </li>
              <li>On February 24th, 2014, Mt. Gox filed for bankruptcy.</li>
              <li>
                On March 15th, 2019, Mt. Gox CEO, Mark Karpeles was found guilty
                of falsifying data to inflate holdings of the exchange.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#847577", color: "#fff" }}
            textClassName="timeline-text-element"
          >
            <h3 className="vertical-timeline-element-title">Celcius</h3>
            <h4 className="date">June 2022</h4>
            <list className="list">
              <li>
                By May of 2022, Celcius had close to $12 billion in assets under
                management.{" "}
              </li>
              <li>
                Celsius had been using the crypto custodian Prime Trust to store
                some customer assets since March 2020. This relationship ended
                in June 2021, when Prime Trust's risk team expressed concern
                about Celsius's strategy of "endlessly re-hypothecating assets
                ... lending the same assets over and over and over again to
                juice yields".{" "}
              </li>
              <li>
                On June 11th, 2022, Celcius CEO Alex Mashinsky replied to a user
                on Twitter stating that the user’s claims of frozen withdrawals
                were “FUD and misinformation.”
              </li>
              <li>
                Two days later, Celcius announced that it had suspended all
                withdrawals, swaps, and account transfers due to “extreme market
                conditions”.
              </li>
              <li>
                On July 14th, 2022, Celcius filed for bankruptcy. In the
                filling, it was discovered that the company had $5.5 billion in
                liabilities and only $4.31 billion in assets.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#847577", color: "#fff" }}
            textClassName="timeline-text-element"
          >
            <h3 className="vertical-timeline-element-title">Voyager Digital</h3>
            <h4 className="date">June 2022</h4>
            <list className="list">
              <li>
                On June 17th, hedge fund Three Arrows Capital announced it had
                suffered heavy losses due to the collapse of the Terra
                ecosystem.
              </li>
              <li>
                On June 22nd, 2022, Voyager disclosed that it had exposure to
                Three Arrows Capital to the tune of $370 million worth of BTC
                and $350 million worth of USDC.{" "}
              </li>
              <li>
                On July 1st, 2022, Voyager froze all deposits, withdrawals, and
                loyalty rewards due to “market conditions”.
              </li>
              <li>
                On July 7th, 2022, Voyager Digital filed for bankruptcy. In the
                filing, Voyager estimated that it had more than 100,000
                creditors and somewhere between $1 billion and $10 billion in
                assets, and liabilities worth the same value.
              </li>
            </list>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-element"
            iconStyle={{ background: "#847577", color: "#fff" }}
            textClassName="timeline-text-element"
          >
            <h3 className="vertical-timeline-element-title">FTX</h3>
            <h4 className="date">November 2022</h4>
            <list className="list">
              <li>What happened?</li>
            </list>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}
