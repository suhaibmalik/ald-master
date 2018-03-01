<template>
    <div id="wrapper">
        <h2>Dashboard</h2>
        <hr class="hr" />
        <div class="Dashboard">
            <div class="Dashboard__panel">
                <div class="Panel__value">100 <span class="Panel__unit">°C</span></div>
                <div class="Panel__description">Chamber Avg. Temp.</div>
                <div class="Panel__stats">Sources: 6</div>
            </div>
            <div class="Dashboard__panel">
                <div class="Panel__value">121 <span class="Panel__unit">°C</span></div>
                <div class="Panel__description">Gas Avg. Temp.</div>
                <div class="Panel__stats">Sources: 10</div>
            </div>
            <div class="Dashboard__panel">
                <div class="Panel__value">1.2 <span class="Panel__unit">E-3 Torr</span></div>
                <div class="Panel__description">Chamber Pressure</div>
                <div class="Panel__stats">Sources: 1</div>
            </div>
            <div class="Dashboard__panel">
                No experiment in progress.
            </div>
        </div>
    </div>
</template>

<style lang="sass" scoped>

    .hr
        display: block
        height: 1px
        border: 0
        border-top: 1px solid rgba(255,255,255,.1)
        margin: 1em 0
        padding: 0

    .Dashboard
        display: grid
        grid-template: 1fr / 1fr 1fr 1fr 2fr
        grid-gap: 2em

        &__panel
            border-radius: 5px
            padding: 1em
            background-color: rgba(68, 70, 79, 0.5)

    .Panel

        &__value
            color: white
            font-weight: bold
            font-size: 1.75em

        &__unit
            font-weight: normal
            font-size: .75em

        &__description
            color: rgba(255,255,255,.5)
            font-size: .75em

        &__stats
            font-size: .75em
            margin-top: 1em

</style>

<script>

    export default {
        name: 'dashboard',
        data() {
            return {
                value: 0
            }
        },

        methods: {
            poll() {
                const Readline = this.$serial.parsers.Readline;
                const port = new this.$serial('COM4', {
                    baudRate: 9600,
                });
                const parser = new Readline();
                port.pipe(parser);
                parser.on('data', console.log);
            }
        }
    }

</script>