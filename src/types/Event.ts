export interface PharmaCompanyInfo {
  id: string
  name: string
  bio: string
  logo_file_id: string
  banner_image_file_id: string
  report_adverse_event_website_url: string
}
export interface Event {
  id: string
  name: string
  associated_products: [
    {
      media: string
      name: string
      pharma_company: PharmaCompanyInfo
    }
  ]
  description: string
  start_at: Date
  end_at: Date
  hosted_at_url: string
  hosts: string
  image_ids: [string]
  location: string
  pharma_company: PharmaCompanyInfo
  short_description: string | null
}
