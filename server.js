const nodemailer = require("nodemailer");

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nilesh.bhimani@codezeros.com",
    pass: "Nilesh@21",
  },
});

let mailDetails = {
  from: "nilesh.bhimani@codezeros.com",
  to: "nbhimani.web@gmail.com,nilesh.bhimani@codezeros.com",
  subject: "Test mail",
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EDGE196</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        @media screen and (max-width:600px) {
            .token {
                width: 58px;
            }

            table {
                width: 100% !important;
            }

            .token-text {
                margin: -24px 0 10px 70px !important;
            }

            .class1 {
                width: 70% !important;
                padding: 0 15px 0 22px !important;
            }

            .class2 {
                font-size: 8px !important;
                padding: 70px 22px 10px !important;
            }

            .class3 {
                font-size: 24px !important;
                padding: 0 22px 0 !important;
            }

            .class4 {
                font-size: 9pt !important;
                padding: 20px 22px 20px !important;
            }

            .class5 {
                padding: 20px 22px 20px 15px !important;
                width: 60%;
            }

            .class6 {
                font-size: 8px !important;
            }

            .class7 {
                font-size: 24px !important;
            }

            .class8 {
                padding: 20px 22px 20px 15px !important;
            }

            .class9 {
                font-size: 8px !important;
                padding: 8px 15px !important;
            }

            .class10 {
                width: 166px !important;
            }

            .class11 {
                font-size: 6px !important;
            }

            .class12 {
                padding-right: 22px !important;
                padding-left: 22px !important;
            }
        }
    </style>
</head>

<body style="margin: 0;">
    <center>
        <table cellspacing="0" cellpadding="0" border="0"
            style="font-family: 'Montserrat', sans-serif;margin: 0 auto;width: 600px;">
            <tbody>
                <tr>
                    <td class="class1"
                        style="font-size: 8px;font-weight: 700;vertical-align: middle;color: #717171;text-transform: uppercase;padding: 0 15px 0 36px;">
                        <img src="https://edgex.s3.us-east-2.amazonaws.com/token.png" alt="" class="token" />

                    </td>
                    <td align="right">
                        <img src="https://edgex-web-app.s3.us-east-2.amazonaws.com/images/edge-logo.png" alt=""
                            style="width:116px" />
                    </td>
                </tr>
                <tr style="background: #F4F4F4;border-radius: 12px; overflow: hidden;">
                    <td colspan="2" style="border-radius: 12px; overflow: hidden;">
                        <table cellspacing="0" cellpadding="0" border="0">
                            <tbody>
                                <tr>
                                    <td colspan="2" class="class2"
                                        style="font-size: 12px;font-weight: 700;vertical-align: middle;color: #717171;padding:90px 36px 10px;text-transform: uppercase;">
                                        Staking successful.</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="class3"
                                        style="font-size: 30px;vertical-align: middle;color: #717171;padding:0 36px 10px;">
                                        Congratulations.<br /> you staked your EDGE-X.</td>
                                </tr>
                                <tr>
                                    <td class="class4" colspan="2" style="font-size: 9pt;line-height:20px;font-weight: 500;vertical-align: middle;color:
                                    #717171;padding:20px 36px 20px;">
                                        You successfully staked <span style="font-weight: 700;">[generated total
                                            staked here]</span> EDGE-X for <span style="font-weight: 700;">[period of
                                            staking here]</span> and earned a staking reward of <span
                                            style="font-weight: 700;">[generated reward here]</span>
                                        EDGE-X.
                                        Please
                                        add
                                        <a href="mailto:noreply@edge196.com" style="color:
                                        #32CC86;text-decoration: none; font-weight: 700;">noreply@edge196.com</a> to
                                        your contacts to ensure you don’t miss updates.</td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="vertical-align: middle;padding:0 36px 10px;" align="center">
                                        <!--[if mso]>
                                    <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"
                                        href="http://www.EXAMPLE.com/" style="font-size:12px;color:
                                                                            #717171;text-decoration: none; font-weight: 700;border: 1px
                                                                            solid #717171;padding: 8px 32px; margin: 0 auto; display:
                                                                            table;height:33px;v-text-anchor:middle;width:161px;"
                                                                            fillcolor="#F4F4F4" arcsize="40%"
                                        stroke="t">
                                        <w:anchorlock/>
                                        <center style="color:#717171;font-size:12px;font-weight:700;">
                                            Staking details
                                        </center>
                                    </v:roundrect>
                                    <![endif]-->
                                        <!--[if !mso]> <!-->
                                        <a href="#" style="font-size:12px;color:
                                        #717171;text-decoration: none; font-weight: 700;border-radius: 33px;border: 1px
                                        solid #717171;padding: 8px 32px; margin: 0 auto; display: table;">Staking
                                            details</a>
                                        <!-- <![endif]-->

                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="font-size: 10px;text-align:center;line-height:12px;font-weight: 500;vertical-align: middle;color:
                                    #717171;padding:0 36px 20px;">
                                        Want free EDGE-X? Refer your friends and earn EDGE-X. Learn how much you could
                                        earn here.</td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <a href="#"><img
                                                src="https://edgex-web-app.s3.us-east-2.amazonaws.com/images/text-bg.png"
                                                style="width:100%" alt="" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2" style="font-size: 7px;text-align:center;line-height:18px;font-weight: 500;vertical-align: middle;color:
                                        #717171;padding:50px 36px 0px;">
                                        <img src="https://edgex-web-app.s3.us-east-2.amazonaws.com/images/edge-logo.png"
                                            alt="" style="width: 196px;" class="class10" /></td>
                                </tr>
                                <tr>
                                    <td class="class11" colspan="2" style="font-size: 8px;text-transform: uppercase;text-align:center;line-height:10px;font-weight: 500;vertical-align: middle;color:
                                        #989898;padding:0 36px 20px;">
                                        www.edge196.com | info@edge196.com</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="class12" style="font-size:9px;line-height:14px;font-weight: 500;vertical-align: middle;color:
                                        #989898;padding:0 36px 20px;">
                                        You received this email because <a href="mailto:andrew@edge196.com" style="color:
                                            #32CC86;text-decoration: none; font-weight: 700;">andrew@edge196.com</a>
                                        is registered to receive email notifications and information from EDGE196. For
                                        more
                                        information please review our
                                        <a href="https://www.dev.edge196.com/privacy-policy" target="_blank"
                                            style="color: #32CC86;text-decoration: none; font-weight: 700;">privacy
                                            policy</a>. </td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="class12" style="font-size: 9px;line-height:14px;font-weight: 500;vertical-align: middle;color:
                                        #989898;padding:0 36px 20px;">This e-mail message (and any attachments) from
                                        EDGE196, LLC may contain legally privileged and confidential information solely
                                        for
                                        the use of the intended recipient. If you received this message in error, please
                                        delete the message and notify the sender. Any unauthorized reading,
                                        distribution,
                                        copying, or other use of this message (and attachments) is strictly prohibited.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="font-size: 9px;text-align:center;line-height:14px;font-weight: 500;vertical-align: middle;color:
                                            #989898;padding:20px 36px 20px;">
                        © 2021 EDGE196. All rights reserved.</td>
                </tr>
            </tbody>
        </table>
    </center>
</body>

</html>`, // html body
};

mailTransporter.sendMail(mailDetails, function (err, data) {
  if (err) {
    console.log("Error Occurs");
  } else {
    console.log("Email sent successfully");
  }
});
//https://www.geeksforgeeks.org/how-to-send-email-with-nodemailer-using-gmail-account-in-node-js/
