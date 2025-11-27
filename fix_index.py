
import os

def fix_file():
    file_path = r"c:\Antigravity\begonia\index.html"
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Split at Hero Section
    if "<!-- Hero Section -->" not in content:
        print("Could not find Hero Section marker")
        return
        
    parts = content.split("<!-- Hero Section -->")
    css_part = parts[0]
    html_part = "<!-- Hero Section -->" + parts[1]
    
    # Clean css_part: remove the top garbage (lines 1-13)
    css_lines = css_part.splitlines()
    # Find the line that starts with border-radius
    start_css_index = 0
    for i, line in enumerate(css_lines):
        if "border-radius: 200px" in line:
            start_css_index = i
            break
    
    orphaned_css = "\n".join(css_lines[start_css_index:])
    
    # Construct the top
    top_html = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Begônia Arte e Presentes | Cerâmica Artesanal Brasileira</title>
    <meta name="description" content="Peças exclusivas de cerâmica pintada à mão, feitas com a alma das artesãs brasileiras. Cada criação carrega história, técnica ancestral e amor pelo ofício.">
    <meta property="og:title" content="Begônia Arte e Presentes">
    <meta property="og:description" content="Cerâmica artesanal brasileira pintada à mão">
    <meta property="og:image" content="images/logo.jpg">
    <link rel="icon" type="image/jpeg" href="images/logo.jpg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
    <style>
        :root {
            /* Palette extracted from logo.jpg */
            --primary-red: #921211;
            --primary-orange: #d4693c;
            --bg-white: #ffffff;
            --bg-offwhite: #fcfffd;
            
            /* Mapped to existing variables for compatibility, but updated */
            --coral: var(--primary-red);
            --coral-dark: #7a0f0e;
            --terracotta: var(--primary-orange);
            --cream: var(--bg-offwhite);
            --cream-dark: #f0f0f0;
            --teal: #2D5A5A;
            --teal-light: #3D7A7A;
            --olive: #6B7D4A;
            --olive-light: #8B9D6A;
            
            /* High Contrast Text */
            --charcoal: #1a1a1a;
            --brown-soft: #333333;
            --gold-accent: #D4A44C;
            --yellow-warm: #E8B84A;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; font-size: 18px; }

        body {
            font-family: 'Jost', sans-serif;
            background-color: var(--cream);
            color: var(--charcoal);
            line-height: 1.8;
            overflow-x: hidden;
        }

        h1, h2, h3, h4 {
            font-family: 'Cormorant Garamond', serif;
            font-weight: 500;
            letter-spacing: 0.02em;
        }

        body::before {
            content: '';
            position: fixed;
            top: 0; left: 0;
            width: 100%; height: 100%;
            pointer-events: none;
            opacity: 0.025;
            z-index: 1000;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0; left: 0; right: 0;
            padding: 1rem 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            z-index: 100;
            background: linear-gradient(to bottom, rgba(251, 248, 244, 0.98), rgba(251, 248, 244, 0));
            transition: all 0.4s ease;
        }

        nav.scrolled {
            background: rgba(251, 248, 244, 0.98);
            box-shadow: 0 2px 20px rgba(61, 54, 48, 0.08);
            padding: 0.75rem 4rem;
        }

        .logo { height: 70px; transition: height 0.3s ease; }
        nav.scrolled .logo { height: 55px; }

        .nav-links {
            display: flex;
            gap: 3rem;
            list-style: none;
        }

        .nav-links a {
            text-decoration: none;
            color: var(--charcoal);
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 0.05em;
            text-transform: uppercase;
            position: relative;
            padding: 1rem 0.5rem;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0;
            width: 0; height: 2px;
            background: var(--coral);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after { width: 100%; }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            padding-top: 80px;
        }

        .hero-bg {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            z-index: -1;
        }

        .hero-bg::before {
            content: '';
            position: absolute;
            top: -20%; right: -10%;
            width: 70%; height: 140%;
            background: linear-gradient(145deg, rgba(212, 105, 60, 0.06) 0%, rgba(45, 90, 90, 0.08) 40%, rgba(107, 125, 74, 0.05) 70%, transparent 100%);
            border-radius: 50% 0 50% 50%;
            transform: rotate(-15deg);
        }

        .deco-leaf {
            position: absolute;
            opacity: 0.06;
            pointer-events: none;
        }

        .deco-leaf-1 {
            width: 300px; height: 300px;
            background: radial-gradient(ellipse at center, var(--teal) 0%, transparent 70%);
            top: 15%; right: 20%;
            border-radius: 0 80% 0 80%;
            transform: rotate(45deg);
            animation: float 10s ease-in-out infinite;
        }

        .deco-leaf-2 {
            width: 200px; height: 200px;
            background: radial-gradient(ellipse at center, var(--coral) 0%, transparent 70%);
            bottom: 25%; left: 5%;
            border-radius: 80% 0 80% 0;
            transform: rotate(-30deg);
            animation: float 8s ease-in-out infinite reverse;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(45deg); }
            50% { transform: translateY(-20px) rotate(50deg); }
        }

        .hero-content {
            max-width: 1400px;
            margin: 0 auto;
            padding: 0 4rem;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: center;
        }

        .hero-text { animation: fadeInUp 1s ease-out; }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.5rem;
            background: linear-gradient(135deg, var(--teal), var(--teal-light));
            color: white;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            border-radius: 30px;
            margin-bottom: 2rem;
        }

        .hero h1 {
            font-size: 3.8rem;
            line-height: 1.1;
            color: var(--charcoal);
            margin-bottom: 1.5rem;
        }

        .hero h1 span {
            color: var(--coral);
            font-style: italic;
        }

        .hero-subtitle {
            font-size: 1.2rem;
            color: var(--brown-soft);
            margin-bottom: 2.5rem;
            max-width: 480px;
            line-height: 1.8;
        }

        .cta-group {
            display: flex;
            gap: 1.5rem;
            align-items: center;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .btn-primary {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1.25rem 3rem;
            background: var(--coral);
            color: white;
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            border-radius: 50px;
            transition: all 0.4s ease;
            border: 2px solid var(--coral);
            box-shadow: 0 4px 15px rgba(146, 18, 17, 0.3);
        }

        .btn-primary:hover {
            background: var(--coral-dark);
            border-color: var(--coral-dark);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(146, 18, 17, 0.4);
        }

        .btn-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.75rem;
            padding: 1.25rem 3rem;
            background: transparent;
            color: var(--charcoal);
            text-decoration: none;
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            border-radius: 50px;
            border: 2px solid var(--teal);
            transition: all 0.4s ease;
        }

        .btn-secondary:hover {
            background: var(--teal);
            color: white;
            border-color: var(--teal);
        }

        /* Hero Image */
        .hero-image {
            position: relative;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .hero-image-main {
"""
    
    nav_html = """    </style>
</head>
<body>
    <nav id="navbar">
        <img src="images/logo.jpg" alt="Begônia Logo" class="logo">
        <ul class="nav-links">
            <li><a href="#destaque">Destaque</a></li>
            <li><a href="#video">Nossa Essência</a></li>
            <li><a href="#vitrine">Coleções</a></li>
            <li><a href="#artesas">Artesãs</a></li>
            <li><a href="#contato">Contato</a></li>
        </ul>
    </nav>
"""

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(top_html)
        f.write(orphaned_css)
        f.write(nav_html)
        f.write(html_part)

if __name__ == "__main__":
    fix_file()
