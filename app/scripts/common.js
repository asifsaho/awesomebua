'use strict';

/**
 * Check if it's leap year
 * @param {Number} year
 * @returns {boolean}
 */
var isLeapYear = function (year) {
  if (year % 4) {
    if (year % 100) {
      return (year % 400) ? false : true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

/**
 * Returns months with number of days
 * @param {Number} currentYear
 * @returns {Array} months
 */
function months(currentYear) {
  return [
    {
      name: 'January',
      days: 31
    },
    {
      name: 'February',
      days: isLeapYear(currentYear) ? 29 : 28
    },
    {
      name: 'March',
      days: 31
    },
    {
      name: 'April',
      days: 30
    },
    {
      name: 'May',
      days: 31
    },
    {
      name: 'June',
      days: 30
    },
    {
      name: 'July',
      days: 31
    },
    {
      name: 'August',
      days: 31
    },
    {
      name: 'September',
      days: 31
    },
    {
      name: 'October',
      days: 31
    },
    {
      name: 'November',
      days: 30
    },
    {
      name: 'December',
      days: 31
    }
  ];
}

/**
 * All month names
 * @type {string[]}
 */
var monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
