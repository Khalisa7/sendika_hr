
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import {  faHome, faUser, faCalendarAlt, faBell } from '@fortawesome/free-solid-svg-icons'

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
            name    : "news",
            label   : "News Feed",
            link    : "/notification",
            active  : false,
            icons   : <FontAwesomeIcon icon={faBell} className="fa-fw" />
        },
        {
            name    : "profile",
            label   : "Update Profile",
            link    : "/profile",
            active  : false,
            icons   : <FontAwesomeIcon icon={faUser} className="fa-fw" />
        },
        {
            name    : "calendar",
            label   : "Calendar",
            link    : "/calendar",
            active  : false,
            icons   : <FontAwesomeIcon icon={faCalendarAlt} className="fa-fw" />
        },
    ]

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
    ]
}

export { bundle, data }