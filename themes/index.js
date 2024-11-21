// ==UserScript==
// @name         GitHub Orange Space Theme
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  A dark theme for GitHub with orange and purple accents and a black background.
// @author       Colack
// @match        https://github.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    'use strict';

    const customCSS = `
        /* Main background and text colors */
        body {
            background-color: #000000 !important; /* Pure black background */
            color: #FFFFFF !important;           /* White text for readability */
        }

        /* Header and navigation bar */
        .Header, .Header-item, .UnderlineNav {
            background-color: #000000 !important; /* Black background for header */
            border-bottom: 1px solid #8E6C88 !important; /* Purple border accent */
        }

        /* Links and buttons */
        a, .btn, .btn-primary {
            color: #FF7F11 !important; /* Bright orange links and text for buttons */
        }

        /* Buttons with primary actions */
        .btn-primary {
            background-color: #8E6C88 !important; /* Muted purple button background */
            border-color: #8E6C88 !important; /* Purple border */
        }

        .btn-primary:hover {
            background-color: #A94E7C !important; /* Slightly brighter purple on hover */
            border-color: #FF7F11 !important;     /* Orange hover border */
        }

        /* Code block styling */
        .blob-code-inner {
            background-color: #1c1c1c !important; /* Dark gray background for code */
            color: #FF7F11 !important;           /* Orange text for code */
        }

        /* Issue labels */
        .IssueLabel {
            background-color: #8E6C88 !important; /* Purple label background */
            color: #FFFFFF !important;           /* White label text */
            border-radius: 5px !important;
            padding: 4px 8px !important;
            font-size: 12px !important;
        }

        /* Footer styling */
        .footer {
            background-color: #000000 !important; /* Black footer background */
            color: #8E6C88 !important;           /* Muted purple footer text */
        }

        /* Table and list row hover effects */
        .js-navigation-container .Box-row:hover {
            background-color: #1a1a1a !important; /* Slightly lighter black */
        }

        /* Repository and file highlights */
        .file-wrap, .repository-content {
            background-color: #000000 !important; /* Black for consistency */
            border-color: #8E6C88 !important; /* Purple borders */
        }

        /* Breadcrumb navigation links */
        .breadcrumb span, .breadcrumb-item a {
            color: #FF7F11 !important; /* Orange for breadcrumbs */
        }
    `;

    GM_addStyle(customCSS);
})();
