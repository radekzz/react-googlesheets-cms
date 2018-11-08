import config from './config';

export function loadSomething(callback) {
    window.gapi.client.load("sheets", "v4", () => {
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: config.spreadsheetId,
          range: "Form Responses 1"
        })
        .then(
          response => {
            const data = response.result.values;

            const templates = data.map(template => ({
              timestamp: template[0],
              sparcid: template[1],
              categories: template[2],
              endtime: template[3],
              enddate: template[4],
              couponid: template[5],
              discountvalue: template[6],
              minspend: template[7],
              maxdiscount: template[8],
              starttime: template[9],
              startdate: template[10],
              template: template[11],
              sellers: template[12],
              redemptions: template[13],
              title: template[14],
              email: template[15]
            })) || [];

            callback({
              templates
            });
          },
          response => {
            callback(false, response.result.error);
          }
        );
    });
}
