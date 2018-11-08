# GoogleSheets React Terms-Editor

This is an application used for the creation of self-editing Terms and Conditions pages for the eBay Marketing team.

## Branches

- **Master** - Reserved for production ready code.

- **Development** - This is the active development branch.

## Developing

Please create a feature branch off of development and once you are happy with your work, submit a pull request into the development branch.

## To Begin

Step 1.

```
git clone git@github.corp.ebay.com:global-webdev-ebay/googlesheets-react.git
```

Step 2.

```
cd googlesheets-react
```

Step 3.

```
npm install (or yarn)
```

Step 4.

```
npm run start (or yarn start)
```

## To Build for Production

Step 1.

```
npm run build
```

Step 2.

Upload the js files and css files from the **static** folder to the [resportal](https://resportal.corp.ebay.com/)

Step 3.

Update `index.html` from the **build** folder with the links from the [resportal](https://resportal.corp.ebay.com/)

Step 4.

Upload the `index.html` file to clearcase at this link: `html\html00\wd\terms\`

## Using the DevPanel

Once inside the application, if you are on the _special list_ you will be able to see the DevPanel when on the `/view/:sparcid` url.

It will be located in the bottom left corner. It contains two buttons - **ClearCase** and **ClearCaseApp**. Pressing each button leads to the respective html. Here you copy all the raw code and paste it into the relative file within ClearCase.

## Important Links

- [Live App](http://pages.fp5009.qa.ebay.com/wd/terms/#/)
- [Example Preview Page](http://pages.fp5009.qa.ebay.com/wd/terms/#/view/EUPLA-12987)

- [Google Sheet](https://docs.google.com/spreadsheets/d/1_o073-NsgoEtoJLSR_nwwMb5u9sWvSEIYlM5e2Qw2lw/edit#gid=0)
- [Google SCRIPT API](https://script.google.com/a/ebay.com/macros/d/M2es1nV1b3QhuPJdRpILOz3Ac4yVd_8hJ/edit?uiv=2&mid=ACjPJvERKQRXozcKAnCh5xRFB_OP6zLEc5hKx8uVoDYBvXfdeR6U0yRn_xKUJpxR9O4Os1IHwzttmcR64l1Yubtj3RItOpULhBzIp-_5ko6F1Ik0hzLlnEGyMGaqFECiWSw8toGbnqbg6yA)
- [Google API Dashboard for WebDev](https://console.cloud.google.com/apis/dashboard?project=webdev-cms&folder&organizationId=959645619243&duration=PT1H)
- [JIRA Sprint board](https://jirap.corp.ebay.com/secure/RapidBoard.jspa?rapidView=20440&projectKey=WDA&view=detail&selectedIssue=WDA-86)

## Components Map

![components map](https://github.corp.ebay.com/global-webdev-ebay/googlesheets-react/raw/development/components-map.png)
