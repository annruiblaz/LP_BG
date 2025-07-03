<script>
    export default {
        name: 'Highlights',
        data() {
            return {
                highlights: [{
                        title: '+10 años de experiencia',
                        text: 'Asesoramos a gimnasios, hoteles, clínicas y centros deportivos en toda España.'
                    },
                    {
                        title: 'Entrega en 48-72h',
                        text: 'Stock propio y logística nacional. Sin intermediarios ni demoras.'
                    },
                    {
                        title: 'Calidad profesional',
                        text: 'Equipamiento certificado para uso intensivo diario. Garantía incluida.'
                    }
                ]
            };
        }
    };
</script>

<template>
    <section id="highlights" class="highlights-container">
        <div class="highlights-inner">
            <div v-for="(item, index) in highlights" :key="index" class="highlights-card">
                <h3 class="highlights-card-title">{{ item.title }}</h3>
                <p class="highlights-card-text">{{ item.text }}</p>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .highlights-container {
        padding: 50px 20px;
        display: flex;
        justify-content: center;
        background-color: var(--color-primary-darker);
    }

    .highlights-inner {
        max-width: 1200px;
        width: 100%;
        display: flex;
        gap: var(--spacing-md);
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .highlights-card {
        background-color: var(--color-light);
        border-radius: var(--border-radius);
        padding: var(--spacing-lg);
        box-shadow: 0 4px 16px var(--color-shadow-dark-20);
        flex: 1 1 300px;
        max-width: 340px;
        transition: transform .3s ease, box-shadow .3s ease-in-out;
    }

    .highlights-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 16px var(--color-shadow-dark-50);
    }

    .highlights-card-title {
        font-family: var(--font-primary);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-lg);
        margin-bottom: var(--spacing-unit);
        color: var(--color-primary-dark);
    }

    .highlights-card-text {
        font-family: var(--font-secondary);
        font-size: var(--font-size-md);
        line-height: var(--line-height);
        color: var(--color-dark);
        opacity: .9;
    }
</style>