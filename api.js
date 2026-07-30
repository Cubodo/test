<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About - Amit Kumar</title>

<style>
body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: #18181B;
    line-height: 1.7;
    background: #fff;
}

.container {
    max-width: 1200px;
    margin: auto;
    padding: 60px 20px;
}

.header {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 20px;
    margin-bottom: 50px;
}

.header p {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: #999;
    margin: 0;
}

.header h2 {
    font-size: 48px;
    margin: 10px 0 0;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    gap: 50px;
}

.about-image img {
    width: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid #ddd;
}

.bio p {
    color: #555;
    margin-bottom: 20px;
}

@media(max-width:768px) {
    .about-grid {
        grid-template-columns: 1fr;
    }

    .header h2 {
        font-size: 32px;
    }
}
</style>
</head>

<body>

<section id="about">
    <div class="container">

        <div class="header">
            <p>About the Designer</p>
            <h2>Crafting Hardware with Technical Rigor</h2>
        </div>

        <div class="about-grid">

            <div class="about-image">
                <img src="images/amit_kumar.jpg"
                     alt="Amit Kumar"
                     onerror="this.src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800';ty,
                    technical know-how, and a strong appreciation for well-crafted products.
                    With roots in accessory design and bespoke craftsmanship, my journey
                    has been shaped by a genuine passion for creating designs that are both
                    beautiful and practical.
                </p>

                <p>
                    I enjoy working at the intersection of aesthetics and function, with a
                    detail-oriented approach and a growing interest in how emerging
                    technologies can enhance design. My experience allows me to blend
                    traditional design principles with modern tools to develop solutions
                    that are meaningful and user-focused.
                </p>

                <p>
                    Whether designing refined accessories or exploring broader industrial
                    challenges, I strive to create designs that are honest, useful, and
                    engaging.
                </p>
            </div>

        </div>

    </div>
</section>

</body>
</html>
