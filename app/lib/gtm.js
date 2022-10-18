export const GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID

export const datalayerloaded = (url) => {
  window.dataLayer.push({
    event: 'dataLayer-loaded',
    originalLocation: url
  })
}

export const pageview = (url) => {
  console.log("Page view is being processed...", url)
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  })
}

export const gtmVirtualPageView = rest => {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest
  })
}

// Add more GTM events here