/**
 * Date utility functions
 * Provides helper functions for date formatting and manipulation
 * @module DateUtils
 */

/**
 * Converts an ISO date string to a Date object
 * @function formatDate
 * @param {string} dateString - ISO 8601 formatted date string
 * @returns {Date} A Date object representing the provided date string
 */
export function formatDate(dateString) {
    return new Date(dateString);
}