# so-forms

so-forms is a node package for building forms for the Service Optimisation group at UK Home Office.

The module wraps the ```hof``` ([Home Office Forms](https://github.com/UKHomeOffice/hof)) module and provides a number of other features to make it easy to standardise the production and maintenance of multiple form instances. It is designed to provide a consistent single upstream source for downstream projects such as ```rotm``` ([Reporting Online Terrorist Materials](https://github.com/UKHomeOffice/RTM)) and ```gro-enquiries``` ([General Register Office Certificate Enquiries](https://github.com/UKHomeOffice/gro)).

## Installation

```bash
  npm install --save so-forms
```

## Features

In addition to exposing the ```hof``` to individual form applications, the ```so-forms``` module includes the following features:

- An ajax controller allowing XHR requests and returning JSON responses instead of HTML
- A reset controller whcih permits emptying the session of all user data
- A logger which is a wrapper around [winston](https://github.com/winstonjs/winston)

## Roadmap

Future features to be added to ```so-forms```:

- Error handling
- Email service
- Session store specificaiton
- Common partials
- Per-journey asset building
