import React, { Component } from "react";
import "./devpanel.css";
import { dragElement } from "./devhelpers";

export default class DevPanel extends Component {
  componentDidMount = () => {
    dragElement({
      dragElSelec: ".dev-panel",
      dragHandleElSelec: ".dev-panel__title"
    });
    this.parseForClearcase({
      attachToEl: ".dev-panel__actions"
    });
  };

  parseForClearcase({ attachToEl }) {
    const svgIcon = `
        <svg fill="#000000" height="18" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
        </svg>
    `;

    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    button1.className = "clearcase-code";
    button2.className = "clearcase-app-code";
    button1.innerHTML = svgIcon + "<span>ClearCase</span>";
    button2.innerHTML = svgIcon + "<span>ClearCaseApp</span>";
    button1.addEventListener("click", () => clearCaseHtml(false));
    button2.addEventListener("click", () => clearCaseHtml(true));
    const devPanel = document.querySelector(attachToEl);
    devPanel.appendChild(button1);
    devPanel.appendChild(button2);

    function clearCaseHtml(isApp) {
      // Grab the html contents
      let pageHTML = document.documentElement.outerHTML;

      // Remove everything after PARSE-END comment (this script included)
      let oneHTML = pageHTML;
      pageHTML
        .match(
          /<meta name="devpanel">.*[\s\S]*?<div class="ski-glbheader ski-glbheader--960">/gim
        )
        .map(match => {
          return (oneHTML = oneHTML.replace(
            match,
            '</head><body class="ski-body"><div class="ski-glbheader ski-glbheader--960">'
          ));
        });
      pageHTML
        .match(/ski-glbheader--960">.*[\s\S]*?<main class="ski-main">/gim)
        .map(match => {
          return (oneHTML = oneHTML.replace(
            match,
            `ski-glbheader--960"> <!-- #include generic="\\$\${GENERIC}headers\u005C3\u005C2\u005C1\u005C0_0.html" --></div><main class="ski-main">`
          ));
        });
      pageHTML
        .match(/<script src="https:\/\/apis.*[\s\S]*?async=""><\/script>/gim)
        .map(match => {
          return (oneHTML = oneHTML.replace(match, ""));
        });
      pageHTML
        .match(/<div id="ski-foot">.*[\s\S]*?<\/body><\/html>/gim)
        .map(match => {
          return (oneHTML = oneHTML.replace(
            match,
            '<div id="ski-foot"><div class="ski-foot-container ski-foot-container--960"><!--#include virtual="included\\footer.html" --></div></div>'
          ));
        });
      pageHTML.match(/<span class="editable-field">/gim).map(match => {
        return (oneHTML = oneHTML.replace(match, ""));
      });
      pageHTML.match(/<\/span>/gim).map(match => {
        return (oneHTML = oneHTML.replace(match, ""));
      });
      if (isApp) {
        let cleanHTML = oneHTML;
        cleanHTML = cleanHTML.replace(
          '<meta name="robots" content="index,follow">',
          '<meta name="robots" content="noindex,nofollow">'
        );

        /*
        //this code is ready for more 
                const getNodesToRemoveFromElement = stringContent => {
                  const el = document.createElement("div");
                  el.innerHTML = stringContent;
                  return el.getElementsByClassName("editable-field");
                };
        
                for (let node of getNodesToRemoveFromElement(cleanHTML)) {
                  cleanHTML.replace(
                    '<span class="editable-field">' + node.textContent + '</span>',
                    node.textContent
                  );
                  console.log(node.textContent);
                }
        */

        //This code is safe only for simple T&C template
        cleanHTML = cleanHTML.replace(/<span class="editable-field">/gim, "");

        //This code is safe only for simple T&C template
        cleanHTML = cleanHTML.replace(/<\/span>/gim, "");

        cleanHTML = cleanHTML.replace(
          /<div class="ski-glbheader[\s\S]*?<\/div>/gim,
          ""
        );
        cleanHTML = cleanHTML.replace(
          /<div class="ski-foot-container[\s\S]*?<\/div>/gim,
          ""
        );
        // cleanHTML = cleanHTML.replace(
        //   /'<span class="editable-field">*?<\/span>/gim,
        //   ""
        // );
        oneHTML = cleanHTML;
      }

      const finalHtml = `
            <xmp><!DOCTYPE html>${oneHTML}</body></html></xmp>
        `;
      document.open();
      document.write(finalHtml);
      document.close();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="dev-panel" id="dev-panel">
          <div id="devpanel-container">
            <span className="dev-panel__title" id="dev-panelheader">
              Dev Panel
            </span>
            <div className="dev-panel__actions" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
