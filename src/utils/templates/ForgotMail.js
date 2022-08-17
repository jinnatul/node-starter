export const ForgotTemplate = (name, link) => {
  return `
  <!DOCTYPE html>
  <html>
  
  <head>
    <title></title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <style type="text/css">
      body,
      table,
      td,
      a {
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
      }
  
      table,
      td {
        mso-table-lspace: 0pt;
        mso-table-rspace: 0pt;
      }
  
      img {
        -ms-interpolation-mode: bicubic;
      }
  
      img {
        border: 0;
        height: auto;
        line-height: 100%;
        outline: none;
        text-decoration: none;
      }
  
      table {
        border-collapse: collapse !important;
      }
  
      body {
        height: 100% !important;
        margin: 0 !important;
        padding: 0 !important;
        width: 100% !important;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
  
      @media screen and (max-width:600px) {
        h1 {
          font-size: 32px !important;
          line-height: 32px !important;
        }
      }
  
      div[style*="margin: 16px 0;"] {
        margin: 0 !important;
      }
    </style>
    <style type="text/css">
    </style>
  </head>
  
  <body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
    <div
      style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
      Reset your password
    </div>
    <table border="0" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td bgcolor="#f4f4f4" align="center">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td align="center" valign="top" style="padding: 40px 10px 40px 10px;">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td bgcolor="#ffffff" align="center" valign="top"
                style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
                <h1 style="font-size: 28px; font-weight: 400; margin: 0; letter-spacing: 0px;">Reset your password</h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td bgcolor="#ffffff" align="left"
                style="padding: 20px 30px 40px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="margin: 0;"><h3>Hi, ${name}</h3>Someone (hopefully you) has requested a password reset for your <b>DataLagbe</b> account. Follow the link below to set a new password. Link is valid for 10 minutes.</p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="left">
                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tr>
                    <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                      <table border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td align="center" style="border-radius: 3px;" bgcolor="#4A35EA"><a href="${link}"
                              target="_blank"
                              style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #4A35EA; display: inline-block;">Reset
                              Password</a></td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="left"
                style="padding: 0px 30px 0px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="left"
                style="padding: 20px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="margin: 0;"><a href="${link}" target="_blank"
                    style="color: #4A35EA;">${link}</a></p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="left"
                style="padding: 0px 30px 20px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.
                </p>
              </td>
            </tr>
            <tr>
              <td bgcolor="#ffffff" align="left"
                style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
                <p style="margin: 0;"><b>Regards</b>,<br>Morol Academy</p>
              </td>
            </tr>
            <tr><td><div style="background-color: transparent">
              <div
                class="block-grid"
                style="
                  min-width: 320px;
                  max-width: 680px;
                  overflow-wrap: break-word;
                  word-wrap: break-word;
                  word-break: break-word;
                  margin: 0 auto;
                  background-color: transparent;
                "
              >
                <div
                  style="
                    border-collapse: collapse;
                    display: table;
                    width: 100%;
                    background-color: transparent;
                  "
                >
                  <div
                    class="col num12"
                    style="
                      min-width: 320px;
                      max-width: 680px;
                      display: table-cell;
                      vertical-align: top;
                      width: 680px;
                    "
                  >
                    <div class="col_cont" style="width: 100% !important">
                      <div
                        style="
                          border-top: 0px solid transparent;
                          border-left: 0px solid transparent;
                          border-bottom: 0px solid transparent;
                          border-right: 0px solid transparent;
                          padding-top: 15px;
                          padding-bottom: 15px;
                          padding-right: 0px;
                          padding-left: 0px;
                        "
                      >
                        
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          class="social_icons"
                          role="presentation"
                          style="
                            table-layout: fixed;
                            vertical-align: top;
                            border-spacing: 0;
                            border-collapse: collapse;
                            mso-table-lspace: 0pt;
                            mso-table-rspace: 0pt;
                          "
                          valign="top"
                          width="100%"
                        >
                          <tbody>
                            <tr style="vertical-align: top" valign="top">
                              <td
                                style="
                                  word-break: break-word;
                                  vertical-align: top;
                                  padding-top: 10px;
                                  padding-right: 10px;
                                  padding-bottom: 10px;
                                  padding-left: 10px;
                                "
                                valign="top"
                              >
                                <table
                                  align="center"
                                  cellpadding="0"
                                  cellspacing="0"
                                  class="social_table"
                                  role="presentation"
                                  style="
                                    table-layout: fixed;
                                    vertical-align: top;
                                    border-spacing: 0;
                                    border-collapse: collapse;
                                    mso-table-tspace: 0;
                                    mso-table-rspace: 0;
                                    mso-table-bspace: 0;
                                    mso-table-lspace: 0;
                                  "
                                  valign="top"
                                >
                                  <tbody>
                                    <tr
                                      align="center"
                                      style="
                                        vertical-align: top;
                                        display: inline-block;
                                        text-align: center;
                                      "
                                      valign="top"
                                    >
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 10px;
                                          padding-left: 10px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://www.facebook.com/morol1957"
                                          target="_blank"
                                          ><img
                                            alt="Facebook"
                                            height="32"
                                            src="https://res.cloudinary.com/eactivities/image/upload/v1656071995/fb_abtyu6.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Facebook"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 10px;
                                          padding-left: 10px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://www.linkedin.com/in/morol1957"
                                          target="_blank"
                                          ><img
                                            alt="LinkedIn"
                                            height="32"
                                            src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/linkedin_xleuxp.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="LinkedIn"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 10px;
                                          padding-left: 10px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://jinnatul.github.io"
                                          target="_blank"
                                          ><img
                                            alt="Website"
                                            height="32"
                                            src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/website_p53orf.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Website"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 10px;
                                          padding-left: 10px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://twitter.com/jinnatul_md"
                                          target="_blank"
                                          ><img
                                            alt="Twitter"
                                            height="32"
                                            src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/twitter_mjhsaw.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Twitter"
                                            width="32"
                                        /></a>
                                      </td>
                                      <td
                                        style="
                                          word-break: break-word;
                                          vertical-align: top;
                                          padding-bottom: 0;
                                          padding-right: 10px;
                                          padding-left: 10px;
                                        "
                                        valign="top"
                                      >
                                        <a
                                          href="https://github.com/jinnatul"
                                          target="_blank"
                                          ><img
                                            alt="Github"
                                            height="32"
                                            src="https://res.cloudinary.com/eactivities/image/upload/v1656072295/github_go2dyo.png"
                                            style="
                                              text-decoration: none;
                                              -ms-interpolation-mode: bicubic;
                                              height: auto;
                                              border: 0;
                                              display: block;
                                            "
                                            title="Github"
                                            width="32"
                                        /></a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
          <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
            <tr>
              <td bgcolor="#f4f4f4" align="left"
                style="padding: 30px 30px 30px 30px; color: #666666; font-family: Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 18px;">
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  
  </html>
  `
}
