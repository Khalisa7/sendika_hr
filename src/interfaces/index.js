
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {  faHome, faCloudMoon, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {  faUser, faCalendarAlt } from '@fortawesome/free-regular-svg-icons'

const bundle = {
    
    "brand"     : {
        "fullName"  : "Sendika HR",
        "firstName" : "Sendika",
        "lastName"  : "HR",
    },
    "sidebar"   : [
        {
            name    : "home",
            label   : "Home",
            link    : "/",
            active  : true,
            icons   : <FontAwesomeIcon icon={faHome} className="fa-fw" />
        },
        {
            name    : "profile",
            label   : "Update Profile",
            link    : "/profile",
            active  : false,
            icons   : <FontAwesomeIcon icon={faUser} className="fa-fw" />
        },
        {
            name    : "news",
            label   : "News Feed",
            link    : "/notification",
            active  : false,
            icons   : <FontAwesomeIcon icon={faBell} className="fa-fw" />
        },
        {
            name    : "calendar",
            label   : "Calendar",
            link    : "/calendar",
            active  : false,
            icons   : <FontAwesomeIcon icon={faCalendarAlt} className="fa-fw" />
        },
    ],
    "navbar"    : [
        {
            name    : "mail",
            label   : "Mail",
            link    : "/mail",
            active  : false,
            icons   : <FontAwesomeIcon icon={faEnvelope} className="fa-fw" />
        },
        {
            name    : "notification",
            label   : "Notification",
            link    : null,
            active  : false,
            icons   : <FontAwesomeIcon icon={faBell} className="fa-fw" />
        }
    ],
    "quick_tools" : {
        "request_time_off" : [
            {
                label : "Time Off Request",
                icons : <FontAwesomeIcon icon={faCalendarAlt} className="fa-fw mr-3" />,
                items : [
                    {
                        name        : "Ivan D Adi",
                        start_date  : "20 Januari 2020",
                        end_date    : "31 Januari 2020",
                        reasons     : "Annual Leave"
                    },
                    {
                        name        : "Ivan D Adi",
                        start_date  : "20 Januari 2020",
                        end_date    : "31 Januari 2020",
                        reasons     : "Annual Leave"
                    },
                    {
                        name        : "Ivan D Adi",
                        start_date  : "20 Januari 2020",
                        end_date    : "31 Januari 2020",
                        reasons     : "Annual Leave"
                    },
                    {
                        name        : "Ivan D Adi",
                        start_date  : "20 Januari 2020",
                        end_date    : "31 Januari 2020",
                        reasons     : "Annual Leave"
                    }
                ]
            }
        ],
        "companys_events" : [
            {
                label : "Events",
                icons : <FontAwesomeIcon icon={faCloudMoon} className="fa-fw mr-3" />,
                items : [
                    {
                        name        : "Senam Bersama",
                        start_date  : "20 Januari 2020",
                        end_date    : "20 Januari 2020",
                        reasons     : "Healty Live"
                    },
                    {
                        name        : "Senam Bersama",
                        start_date  : "20 Januari 2020",
                        end_date    : "20 Januari 2020",
                        reasons     : "Healty Live"
                    },
                    {
                        name        : "Senam Bersama",
                        start_date  : "20 Januari 2020",
                        end_date    : "20 Januari 2020",
                        reasons     : "Healty Live"
                    },
                    {
                        name        : "Senam Bersama",
                        start_date  : "20 Januari 2020",
                        end_date    : "20 Januari 2020",
                        reasons     : "Healty Live"
                    },
                ]
            }
        ]
    }
}

const data = {
    "profile" : [
        {
            "label" : "Nama",
            "value" : "Herlina Sunaryanto"
        },
        {
            "label" : "Nomor KTP",
            "value" : "3404050206970001"
        },
        {
            "label" : "Tempat, Tanggal Lahir",
            "value" : "Sleman, 2 Juni 1997"
        },
        {
            "label" : "Agama",
            "value" : "Islam"
        },
        {
            "label" : "Jenis Kelamin",
            "value" : "Laki-Laki"
        },
        {
            "label" : "Golongan Darah",
            "value" : "B"
        },
        {
            "label" : "Alamat Sesuai Identitas",
            "value" : "Krapyak 9 Rt/Rw 07/26 Margoagung Seyegan"
        },
        {
            "label" : "Kabupaten",
            "value" : "Sleman"
        },
        {
            "label" : "Provinsi",
            "value" : "Yogyakarta"
        },
        {
            "label" : "Kode Pos",
            "value" : "55561"
        },
        {
            "label" : "Status Perkawinan",
            "value" : "Belum Menikah"
        },
    ],
    "relation" : [
        {
            "label" : "Nomor Induk Karyawan",
            "value" : "03750419"
        },
        {
            "label" : "Email Kantor",
            "value" : "sunaryanto@icube.us"
        },
        {
            "label" : "Tipe",
            "value" : "Kontrak"
        },
        {
            "label" : "Tanggal Bergabung",
            "value" : "1 Juni 2019"
        },
        {
            "label" : "Posisi",
            "value" : "Front End Engeener"
        },
        {
            "label" : "Lokasi",
            "value" : "Yogyakarta"
        },
        {
            "label" : "Pangkat",
            "value" : "Default"
        },
        {
            "label" : "Hak Akses",
            "value" : "Staff"
        },
        {
            "label" : "Atasan",
            "value" : "Irene"
        },
        {
            "label" : "Bawahan",
            "value" : "Belum Ada"
        },
    ],
    "dependents" : {
        0: [ 
            {
                "label" : "Nama Tanggungan",
                "value" : "Sukamta"
            },
            {
                "label" : "Hubungan",
                "value" : "Bapak"
            },
            {
                "label" : "Nomor KTP",
                "value" : "3404050706630007"
            },
            {
                "label" : "Tempat, Tanggal Lahir",
                "value" : "Sleman, 7 Juni 1963"
            },
            {
                "label" : "Status Perkawinan",
                "value" : "Menikah"
            },
        ],
        1: [ 
            {
                "label" : "Nama Tanggungan",
                "value" : "Suminarsih"
            },
            {
                "label" : "Hubungan",
                "value" : "Ibu"
            },
            {
                "label" : "Nomor KTP",
                "value" : "3404051406650007"
            },
            {
                "label" : "Tempat, Tanggal Lahir",
                "value" : "Sleman, 14 Juni 1965"
            },
            {
                "label" : "Status Perkawinan",
                "value" : "Menikah"
            },
        ],
    },
    "emergency_number" : {
        0: [ 
            {
                "label" : "Nama",
                "value" : "Sukamta"
            },
            {
                "label" : "Hubungan",
                "value" : "Bapak"
            },
            {
                "label" : "Nomor Telepon",
                "value" : "081391803025"
            },
            
        ],
        1: [ 
            {
                "label" : "Nama",
                "value" : "Suminarsih"
            },
            {
                "label" : "Hubungan",
                "value" : "Ibu"
            },
            {
                "label" : "Nomor Telepon",
                "value" : "081391803025"
            },
        ],
    },
    
}

export { bundle, data }