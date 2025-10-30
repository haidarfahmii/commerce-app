// @/utils/slug.ts

/**
 * Generate URL-friendly slug from text
 * @param text - Text to convert to slug
 * @returns URL-friendly slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

/**
 * Convert slug back to search-friendly format for querying
 * @param slug - Slug to convert
 * @returns Text format for searching
 */
export function slugToSearchText(slug: string): string {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .toLowerCase()
    .trim();
}

/**
 * Example usage:
 * generateSlug("Tray Table") => "tray-table"
 * generateSlug("Modern Sofa - Premium Quality!") => "modern-sofa-premium-quality"
 * slugToSearchText("tray-table") => "tray table"
 */
