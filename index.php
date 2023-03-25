<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Travel Trekker</title>
    <?php
    require("assets/css.php");
    ?>

</head>

<body onload="init();">

    <!-- Navbar -->
    <?php require(__DIR__ . "/include/navbar.php"); ?>




    <!-- Home Section Start -->
    <div class="home">
        <div class="content">
            <h5>Welcome To Maha Sarakham</h5>
            <div id="box-dec" class="text-center">
                <p>สามารถวางแผนการเดินทางได้อย่างมีประสิทธิภาพและแม่นยำ
                    เพื่อช่วยให้ผู้ใช้งานเดินทางไปยังปลายทางของพวกเขาได้อย่างสะดวกสบายและปลอดภัยมากยิ่งขึ้น</p>
            </div>
            <a href="#map">Let's GO!!!</a>
        </div>
    </div>
    <!-- Home Section End -->

    <!-- SDK Facebook Button Share -->

    <div id="fb-root"></div>
    <script async defer crossorigin="anonymous" src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v16.0"
        nonce="KpoR8s4l"></script>


    <!-- Map Start -->
    <section class="map" id="map">
        <div class="container">

            <div class="main-txt">
                <h1><span>M</span>ap</h1>
            </div>


            <div class="row" style="margin-top: 50px; height: 30rem;">
                <div class="col-md-8 py-3 py-md-0">
                    <div id="maps"></div>
                </div>

                <div class="col-md-4 py-3 py-md-0">
                    <input id=search class="form-control" placeholder="Enter Search" required>
                    <div class="card" id="result">
                        <div class="text-center alert alert-light" role="alert">
                            สามารถค้นหารายการสถานที่ได้
                        </div>
                    </div>
                </div>


            </div>

        </div>

        </div>
    </section>
    <!-- About End -->


    <!-- Footer -->
    <?php require(__DIR__ . "/include/footer.php") ?>

    <!-- Script -->
    <?php
    require("assets/js.php");
    ?>

    <script src="https://api.longdo.com/map/?key=ef4403429ef6547092619fe33deea6c0"></script>
    <script src="assets/script.js"></script>
</body>

</html>