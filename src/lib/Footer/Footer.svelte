<script lang="ts">
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="footer-content">
        <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
    </div>
</footer>

<style>
    footer {
        width: 100%;
        border-top: 1px solid #2a2a2a;
        background: #111;
        color: #d1d1d1;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 1.5rem 2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    p {
        margin: 0;
    }

    nav {
        display: flex;
        gap: 1.25rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: color 150ms ease;
    }

    a:hover,
    a:focus-visible {
        color: #fff;
    }

    @media (max-width: 600px) {
        .footer-content {
            flex-direction: column;
            text-align: center;
        }
    }
</style>