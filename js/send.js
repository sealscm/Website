/*
    File Name:      send.js
    Project Name:   Website Project
    Date Created:   May-3-2022
    Last Updated:   May-3-2022
    Author:         Chris Seals
    Description:    A method to send emails from the contact page.
*/

function Send(name, subject, bodyMessage)
            {
                Email.send
                ({
                    SecureToken: "",
                    To : "",
                    From : "",
                    Subject : "From - " + name + " | " + subject,
                    Body : bodyMessage
                }).then
                (
                    message => alert(message)
                );
            }