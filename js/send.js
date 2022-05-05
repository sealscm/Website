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