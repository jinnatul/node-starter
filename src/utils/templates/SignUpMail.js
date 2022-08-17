export const SignUpTemplate = (otp, name) => {
  return `
  <html xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="content-type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0;">
  <meta name="format-detection" content="telephone=no" />

  <style>
    /* Reset styles */
    body {
      margin: 0;
      padding: 0;
      min-width: 100%;
      width: 100% !important;
      height: 100% !important;
      background-color: #F9F9F9;
    }

    body,
    table,
    td,
    div,
    p,
    a {
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
      line-height: 100%;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      border-collapse: collapse !important;
      border-spacing: 0;
    }

    img {
      border: 0;
      line-height: 100%;
      outline: none;
      text-decoration: none;
      -ms-interpolation-mode: bicubic;
    }

    #outlook a {
      padding: 0;
    }

    .ReadMsgBody {
      width: 100%;
    }

    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    /* Rounded corners for advanced mail clients only */
    @media all and (min-width: 560px) {
      .container {
        border-radius: 8px;
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        -khtml-border-radius: 8px;
      }
    }

    /* Set color for auto links (addresses, dates, etc.) */
    a,
    a:hover {
      color: #127DB3;
    }

    .footer a,
    .footer a:hover {
      color: #999999;
    }
  </style>

  <!-- MESSAGE SUBJECT -->
  <title>Welcome To DataLagbe</title>

</head>

<!-- BODY -->
<!-- Set message background color (twice) and text color (twice) -->

<body topmargin="0" rightmargin="0" bottommargin="0" leftmargin="0" marginwidth="0" marginheight="0" width="100%" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%;
    color: #000000;" bgcolor="#FFFFFF" text="#000000">

  <!-- SECTION / BACKGROUND -->
  <!-- Set message background color one again -->
  <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0"
    style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;" class="background" bgcolor="#FFFFFF">
    <tr>
      <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;"
        bgcolor="#FFFFFF">

        <!-- WRAPPER -->
        <!-- Set wrapper width (twice) -->
        <table border="0" cellpadding="0" cellspacing="0" align="center" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 560px;" class="wrapper">

          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
        padding-top: 20px;
        padding-bottom: 20px;">

              <!-- PREHEADER -->
              <!-- Set text color to background color -->
              <div style="display: none; visibility: hidden; overflow: hidden; opacity: 0; font-size: 1px; line-height: 1px; height: 0; max-height: 0; max-width: 0;
        color: #FFFFFF;" class="preheader"></div>

              <a target="_blank" style="text-decoration: none;" href="${process.env.FRONT_END}"><img
                  border="0" vspace="0" hspace="0"
                  src="https://res.cloudinary.com/eactivities/image/upload/v1654086415/z27bnnyldxx5oqs5etfs.png"
                  width="50" height="50" alt="Logo" title="Logo"
                  style="
          color: #000000;
          font-size: 10px; margin: 0; padding: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: block;" /></a>

            </td>
          </tr>

          <!-- End of WRAPPER -->
        </table>

        <table border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 560px;" class="container">

          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
        padding-top: 0px; 
        color: #000000;
        font-family: sans-serif;" class="paragraph">
              <h3> Hi, ${name}</h3>
              Welcome To <b>DataLagbe</b>. Use the following OTP to complete your verification procedures. OTP is valid for 10
              minutes.
            </td>
          </tr>
          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
        padding-top: 25px;
        padding-bottom: 5px;" class="button">
              <table border="0" cellpadding="0" cellspacing="0" align="center"
                style="max-width: 240px; min-width: 120px; border-collapse: collapse; border-spacing: 0; padding: 0;">
                <tr>
                  <td align="center" valign="middle"
                    style="padding: 12px 24px; margin: 0; border-collapse: collapse; border-spacing: 0; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; -khtml-border-radius: 4px;"
                    bgcolor="#004C3F">
                    <div
                      style="color: #FFFFFF; font-family: sans-serif; font-size: 17px; font-weight: 400; line-height: 120%;">
                      ${otp}
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 17px; font-weight: 400; line-height: 160%;
              padding-top: 0px; 
              color: #000000;
              font-family: sans-serif;" class="paragraph">
                    <br><b>Regards,</b><br>
                    Morol
                  </td>
                </tr>
              </table>
              </div>
            </td>
          </tr>
        </table>


        <table border="0" cellpadding="0" cellspacing="0" align="center"  bgcolor="#FFFFFF" width="560" style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit;
    max-width: 560px;" class="wrapper">


          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;
        padding-top: 25px;" class="social-icons">
              <table width="256" border="0" cellpadding="0" cellspacing="0" align="center"
                style="border-collapse: collapse; border-spacing: 0; padding: 0;">
                <tr>

                  <!-- ICON 1 -->
                  <td align="center" valign="middle"
                    style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                    <a target="_blank" href="https://www.facebook.com/morol1957" style="text-decoration: none;"><img
                        border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
            color: #000000;" alt="F" title="Facebook" width="25" height="25"
                        src="https://res.cloudinary.com/eactivities/image/upload/v1656071995/fb_abtyu6.png"></a></td>

                  <!-- ICON 2 -->
                  <td align="center" valign="middle"
                    style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                    <a target="_blank" href="https://www.linkedin.com/in/morol1957"
                      style="text-decoration: none;"><img border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
            color: #000000;" alt="T" title="Linkedin" width="25" height="25"
                        src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/linkedin_xleuxp.png"></a>
                  </td>

                  <!-- ICON 3 -->
                  <td align="center" valign="middle"
                    style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                    <a target="_blank" href="https://jinnatul.github.io" style="text-decoration: none;"><img border="0"
                        vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
            color: #000000;" alt="G" title="Website" width="25" height="25"
                        src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/website_p53orf.png"></a>
                  </td>

                  <!-- ICON 4 -->
                  <td align="center" valign="middle"
                    style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                    <a target="_blank" href="https://twitter.com/jinnatul_md" style="text-decoration: none;"><img
                        border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
            color: #000000;" alt="I" title="Twitter" width="25" height="25"
                        src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/twitter_mjhsaw.png"></a>
                  </td>

                  <!-- ICON 5 -->
                  <td align="center" valign="middle"
                    style="margin: 0; padding: 0; padding-left: 10px; padding-right: 10px; border-collapse: collapse; border-spacing: 0;">
                    <a target="_blank" href="https://github.com/jinnatul" style="text-decoration: none;"><img
                        border="0" vspace="0" hspace="0" style="padding: 0; margin: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; border: none; display: inline-block;
            color: #000000;" alt="I" title="Github" width="25" height="25"
                        src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/github_go2dyo.png"></a>
                  </td>

                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td align="center" valign="top" style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; font-size: 13px; font-weight: 400; line-height: 150%;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #999999;
        font-family: sans-serif;" class="footer">
              <div>Copyright &#169; <a href="https://www.facebook.com/zinnatul1957" target="_blank"> Morol Academy</a></div>
            </td>
          </tr>

          <!-- End of WRAPPER -->
        </table>

        <!-- End of SECTION / BACKGROUND -->
      </td>
    </tr>
  </table>

</body>

</html>
	`;
};
