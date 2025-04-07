declare global {
  interface Window {
    dataLayer: any[];
  }
}

export const GTM_ID = 'GTM-KJKLKCX2'

export const pageview = (url: string) => {
  if (typeof window.dataLayer !== 'undefined') {
    window.dataLayer.push({
      event: 'pageview',
      page: url,
    })
  }
}

// Inicializa o dataLayer
export const initializeDataLayer = () => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'pageLoaded',
    pageType: 'confirmation',
    pageLanguage: 'pt-BR',
    pageVersion: '1.0.0',
    environment: process.env.NODE_ENV || 'production'
  })
} 