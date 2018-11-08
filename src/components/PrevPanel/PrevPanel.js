import React, { Component } from "react";
import "./prevpanel.css";
import { dragElement } from "./prevhelpers";

export default class PrevPanel extends Component {
    componentDidMount = () => {
        dragElement({
            dragElSelec: ".prev-panel",
            dragHandleElSelec: ".prev-panel__title"
        });
        this.parseForClearcase({
            attachToEl: ".prev-panel__actions"
        });
    };

    parseForClearcase({ attachToEl }) {
        const svgIconHome = `
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTAgMjB2LTZoNHY2aDV2LThoM0wxMiAzIDIgMTJoM3Y4eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=" style="max-width:18px;"/>
    `;
        const svgIconEdit = `
    <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyAxNy4yNVYyMWgzLjc1TDE3LjgxIDkuOTRsLTMuNzUtMy43NUwzIDE3LjI1ek0yMC43MSA3LjA0Yy4zOS0uMzkuMzktMS4wMiAwLTEuNDFsLTIuMzQtMi4zNGMtLjM5LS4zOS0xLjAyLS4zOS0xLjQxIDBsLTEuODMgMS44MyAzLjc1IDMuNzUgMS44My0xLjgzeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=" style="max-width:18px;"/>
    `;
        const buttonHome = document.createElement("button");
        const button0 = document.createElement("button");
        buttonHome.className = "clearcase-home";
        button0.className = "clearcase-edit";
        buttonHome.innerHTML = svgIconHome + "<span>Home</span>";
        button0.innerHTML = svgIconEdit + "<span>Edit</span>";
        buttonHome.addEventListener("click", () => window.location.href = window.location.href.substr(0, window.location.href.lastIndexOf("#") + 1));
        button0.addEventListener("click", () => window.location.href = window.location.href.replace('/view/', '/edit/'));
        const prevPanel = document.querySelector(attachToEl);
        prevPanel.appendChild(buttonHome);
        prevPanel.appendChild(button0);
    }

    render() {
        return (
            <React.Fragment>
                <div className="prev-panel" id="prev-panel">
                    <div id="prevpanel-container">
                        <span className="prev-panel__title" id="prev-panelheader">
                            Preview Panel
          </span>
                        <div className="prev-panel__actions" />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
