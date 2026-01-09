const mongoose = require('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true,
        min:0
    },
    favoritefoods:{
        type:[String],
        default:['loubia']
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlenght:6
    },
    phone:{
        type:String,
        required:true,
    },
    deliveryAddress:{
        type:String,
        required:true
    },
    image:{
        type:String,
        deafult:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAACUCAMAAACeG4TRAAAAOVBMVEXR1dr////O0tj7+/z///3T1Nr29vfL0dXr7O7x8vPg5ObZ3OD4+fnv7/HLz9Xo6Ovi4ufk6u3q8PJ6bioXAAAEgklEQVR4nO2d63LjIAyFQTY2F1+SvP/Drp22GzebC0iO8WH9zWynP7YznAGBEJKs1MHBwcHBwcESovlnCNff8w5lC4wJwXtrnWsa5+zocw/ow5AKo3WdXlC5U+5RfQ5j1Plbbl0vVV9yj+xTUOgr/ZC6zz22TzBZcPNY75WmwE0s9C8E61rbIfcI18Y/WdI3zcHkHuO69PVrxROOfo7rInBvBc+anbv4QkQbV7+fZH09uKrmVILm4eXG9Q8XfA+UzkmKp/MqgGs24c1e/UCzgdZszCsH5CE1ul8ypiqesW3uYfOhl17m83kOuQcu4MSZ5NmccX0xziTPeFhzDkzF2uUeORvLldzBWjNXMe7KZq9rrUfM/YvY61rrHlNym+xr3gA15pavGFWywJQ1pgNGTNcLWfKoo6IhBUlWNi4AVJDkISrK9wzI17mBe6fAlUzde2GlSRZ4IodkFGSSIXdsmWTI1IL/UbLokIJc2DJXBFIy9QKHE/PySFZwrWgwJXu2YK0dpGRRiMBhxr4EMV1tc4+dBQ0CySNiHJv8KPBFHKKP7TtJUGQ6pvDmWeSIzHi0h3XWY/ovHJhkOokuFTMdmGQVRGGgQzIGcltGk0zyHbsBk6xUWurmAy5oksmKHJEJi+aLECuvbwnc9ZHe1Ra8JbcCBtItG6/ApBVu2Yi5q6IkAkBTVtKXR8iURpLEvirESVZq4Ke6VYhBkSvcGyRmFPuKObHsGbq4IjiO24l4Pt1gedqwhjzD87SBKyvmg4pjzIQsmeVp93je9RJiRApQiwy+4QR3c49ZiFHJkiG96yWUfIcccw9ZSvLlAvRCsSQ1FwrzMf0XJm2aC5jkCZ+SGQRaE3ZPwg7moJ3NvyQUbsP3Xvhh9rSj1nZVimI1v0NGSS5IcWSZGNrz6kvikhur3MNckzYunzP3MNekjWubk3uYa9LGhbRzD3NN2kuU5CKczW8iiw6Kkhznf0FHc++IfIU8F+SKRMZ2S2pNGdnoDPox6o5IyVU5s2xi04MKkhwbwC8jQDBjYuMi4A8VC6If4/piro/RdXHFXB8TcrPhclUfk/Ku3pURC0qK3Tv8nrpzQCQhcl/jx3UpPZUTXXNIrtue/vsJuJGwGePi13ei6x60M7hpfaM5tfnTn1SXMMA5n2YQVkr1WKvbGF7C12+swploMkFcGHZlhIn/BUHP0d90Z4QTi4IV1/EuaMZ927QxbbisKfhL9J5tejDPvp8kohuH3WpezYbvqXYaLpE01XhLs7uXDAqj/CB+jfN7uleSGsVF6RH0YTdfIiK/jufxlqrfxzE9rORqxYm22Sd68qbFtdmJokPu0gvPuh/yqWvtcq5umte0rPtRuubp3zmfZP/pg+kZLqgcq9vI+2jw6cYMFs37cNJ62HZrizbyVk9Cmq2nWdhpYBXNm8ZMjKTH5mpsqZnSv+v3ETbs1pn+Xb8PsVnvSsknhFZmoxBRK27/sx7dRjlEcWm327BJhCj/ibxkm+8j7seS9UaBwMyO5j39BpJ34YXc2MAf2dEJ9UXi8/sfZFo2ZBgNW0UAAAAASUVORK5CYII="
    },
    role:{
        type:String,
        enum:['CUSTOMER','ADMIN'],
        default:'CUSTOMER'
    }
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person;