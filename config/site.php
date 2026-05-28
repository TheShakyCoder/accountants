<?php

return [
    'fullname' => env('SITE_FULLNAME', 'Acme — Preston Accountants & Tax Advisers'),
    'shortname' => env('SITE_SHORTNAME', 'Acme'),
    'tagline' => env('SITE_TAGLINE', 'Nurturing small businesses towards success.'),
    'address' => env('SITE_ADDRESS', 'Penwortham, Preston, Lancashire'),
    'telephone' => env('SITE_TELEPHONE', '01772 751135'),
    'email' => env('SITE_EMAIL', 'info@acme.co.uk'),
    'established' => env('SITE_ESTABLISHED', '2009'),
    'opening_times' => "Monday – Friday: 9:00am – 5:30pm<br>Evening &amp; Saturday appointments by arrangement",

    'social' => [
        'linkedin' => env('SITE_LINKEDIN', ''),
        'facebook' => env('SITE_FACEBOOK', ''),
    ],

    // Used as a fallback when the menu_items table is empty.
    'nav_links' => [
        ['label' => 'Services', 'href' => '#services'],
        ['label' => 'Why Acme', 'href' => '#why'],
        ['label' => 'About',    'href' => '#about'],
        ['label' => 'Insights', 'href' => '#insights'],
        ['label' => 'Contact',  'href' => '#contact'],
    ],

    'robots_allowed' => env('ROBOTS_ALLOWED', false),
];
