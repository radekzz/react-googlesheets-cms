import config from './config';

export function loadSomething(callback) {
  window.gapi.client.load("sheets", "v4", () => {
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "List 1",
        simpleSheet: true
      })
      .then(
        response => {
          const data = response.result.values;
          console.log(response.result.values); //Data from google, array of arrays
          const googledata = data.map(gdata => ({
            ID: gdata[0],
            Lang: gdata[1],
            Title: gdata[2],
            Content: gdata[3],
            Category: gdata[4],
            Ingredients: gdata[5],
            IngredientsAmount: gdata[6],
            Image: gdata[7],
            Time: gdata[8],
            Portions: gdata[9]
          })) || [];

          callback({
            googledata
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
