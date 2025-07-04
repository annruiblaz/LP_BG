<script>
export default {
    name: 'Highlights',
    data() {
        return {
            highlights: [
                {
                    title: 'Directo de fábrica',
                    text: 'Equipamiento sin intermediarios, al mejor precio posible.',
                    icon: ['fas', 'industry']
                },
                {
                    title: 'Confianza internacional',
                    text: 'Cientos de gimnasios en Alemania, Austria y el resto de Europa ya entrenan con nuestro equipamiento.',
                    icon: ['fas', 'globe-europe']
                },

                {
                    title: 'Personalización total',
                    text: 'Estructura de acero reforzado y materiales industriales para garantizar rendimiento en entornos exigentes.',
                    icon: ['fas', 'swatchbook']
                },
                {
                    title: 'Asesoría personalizada',
                    text: 'Recibe orientación de expertos para elegir el equipamiento ideal para tu espacio y público objetivo.',
                    icon: ['fas', 'headset']
                },
                {
                    title: 'Entrega rápida',
                    text: 'Logística eficiente con seguimiento de envíos y soporte postventa para asegurar una experiencia sin contratiempos.',
                    icon: ['fas', 'truck-fast']
                }
            ]
        };
    },
    mounted() {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const items = document.querySelectorAll('.highlight-item');
        items.forEach(item => observer.observe(item));
    }
};
</script>

<template>
    <section id="highlights" class="highlights-container">
        <div class="section-title">
            <h2 class="title">Comprometidos con tu gimnasio</h2>
            <p class="subtitle">Calidad profesional, atención personalizada y entregas sin complicaciones. Así trabajamos para <span>ayudarte a crecer.</span></p>
        </div>

        <ul class="highlights-list">
            <li v-for="(item, index) in highlights" :key="index" class="highlight-item">
                <font-awesome-icon :icon="item.icon" class="highlight-icon" />
                <div class="highlight-content">
                    <h3 class="highlight-title">{{ item.title }}</h3>
                    <p class="highlight-text">{{ item.text }}</p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
.highlights-container {
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: var(--color-light);
}

.section-title {
    text-align: center;
    margin-bottom: var(--spacing-lg);
}

.title {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xl);
    color: var(--color-primary-dark);
    margin-bottom: var(--spacing-sm);
}

.subtitle {
    font-family: var(--font-secondary);
    font-size: var(--font-size-lg);
    font-weight: 400;
    color: var(--color-dark);
    max-width: 800px;
    margin: 0 auto;
}

.subtitle span {
    color: var(--color-primary-dark);
    font-weight: var(--font-weight-medium);
}

.highlights-list {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    list-style: none;
    padding: 0;
    margin: 0 auto;
    max-width: 800px;
    width: 100%;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-lg);
    padding: var(--spacing-sm) 0;
    border-bottom: 1px solid var(--color-primary-20);
    opacity: 0;
    transform: translateX(-15px);
    transition: transform 1s ease-out, opacity 1s ease-out;
}

.highlight-item.reveal {
    opacity: 1;
    transform: translateX(0);
}

.highlight-item:hover .highlight-icon {
    transform: scale(1.1) rotate(-3deg);
}

.highlight-icon {
    font-size: var(--font-size-xl);
    color: var(--color-primary-light);
    flex-shrink: 0;
    transition: transform .3s ease;
}

.highlight-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
}

.highlight-title {
    font-family: var(--font-primary);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-lg);
    color: var(--color-primary-dark);
    margin-bottom: 4px;
}

.highlight-text {
    font-family: var(--font-secondary);
    font-size: var(--font-size-md);
    color: var(--color-dark);
    opacity: .9;
    line-height: var(--line-height);
}

@media (min-width: 768px) {
    .highlight-container {
        padding-bottom: 0px;
    }

    .title {
        font-size: var(--font-size-xxl);
    }

    .highlights-list {
        gap: var(--spacing-lg);
    }

    .highlight-item {
        padding: var(--spacing-md) 0;
    }

    .highlight-icon {
        font-size: var(--font-size-xxl);
    }
}
</style>
