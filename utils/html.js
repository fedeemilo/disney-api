const indexApi = () => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />

    <title>Disney API</title>
  </head>
  <body>
    <div
      class="d-flex flex-column justify-content-center align-items-center p-3"
    >
      <h1 class='text-center'>Disney API</>

      <div class="d-flex flex-column mt-5" style="width: 20rem">
        <a class="btn btn-primary btn-lg" href="/api-docs" role="button">API</a>
      </div>
    </div>
  </body>
</html>`

module.exports = {indexApi}