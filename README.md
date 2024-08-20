# Medical Device Searcher

SPA connected to openFDA API to search for medical devices

Through openFDA, developers and researchers will have easy access to high-value FDA public data through RESTful APIs and structured file downloads. In short, our goal is to make it simple for an application, mobile, or web developer, or all stripes of researchers, to use data from FDA in their work. We've done an extensive amount of research both internally and with potential external developers to identify which datasets are both in demand and have a high barrier of entry. As a result, our initial pilot project will cover a number of datasets from various areas within FDA, defined into three broad focus areas: Adverse Events, Product Recalls, and Product Labeling. These API's won't have one-on-one matching to FDA's internal data organizational structure; rather, we intend to abstract on top of a myriad of datasets and provide appropriate metadata and identifiers when possible. Of course, we'll always make the raw source data available for people who prefer to work that way (and it's good to mention that we also will not be releasing any data that could potentially be used to identify individuals or other private information).

The SPA only shows the first matching product and all the identification numbers of the devices involved.

### Link to App Deployed ⚙️

https://medicaldevicefda.netlify.app/

<!-- Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
