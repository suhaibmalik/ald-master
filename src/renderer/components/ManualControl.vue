<template>
    <div id="wrapper">
        <h2>Manual Control</h2>
        <hr class="hr" />
        <div class="ManualControl ManualControl--switches">
            <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
                <div class="Panel__name">Plasma</div>
                <div class="Panel__switch"><label class="switch"><input type="checkbox" /><div></div></label> <span class="Panel__switch-state">Off</span></div>
            </div>
            <div class="ManualControl__panel ManualControl__panel--switch Panel--switch">
                <div class="Panel__name">ALD Valve</div>
                <div class="Panel__switch"><label class="switch"><input type="checkbox" /><div></div></label> <span class="Panel__switch-state">Off</span></div>
            </div>
        </div>
        <div class="ManualControl ManualControl--mfc">
            <div class="ManualControl__panel">
                <div class="Panel__name">MFC 1: N<sub>2</sub></div>
                <div class="Panel__setpoint"><input v-model.number="mfc1.sp" @change="onMfcChange()" type="number" value="0"><span class="Panel__unit">sccm</span></div>
                <!--<div class="Panel__actual">200/1000 sccm</div>-->
                <div class="Panel__stats">Actual: {{mfc1.fr}} sccm</div>
                <div class="Panel__stats">Max: 100 sccm</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">MFC 2: N<sub>2</sub></div>
                <div class="Panel__setpoint"><input type="number" value="0"><span class="Panel__unit">sccm</span></div>
                <!--<div class="Panel__actual">200/1000 sccm</div>-->
                <div class="Panel__stats">Actual: 0 sccm</div>
                <div class="Panel__stats">Max: 500 sccm</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">MFC 3: Ar</div>
                <div class="Panel__setpoint"><input type="number" value="0"><span class="Panel__unit">sccm</span></div>
                <!--<div class="Panel__actual">200/1000 sccm</div>-->
                <div class="Panel__stats">Actual: 0 sccm</div>
                <div class="Panel__stats">Max: 500 sccm</div>
            </div>
        </div>
        <div class="ManualControl ManualControl--heater">
            <div class="ManualControl__panel ManualControl__panel--zone">
                <div class="Panel__name">Heating Group 1: All Test</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.ha" @change="onGroupChange(hg_1)" type="number"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Average: {{ hg_1.ta }} °C</div>
                <div class="Panel__stats">Heaters: 14</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 1</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h1" @change="onHeaterSetpointChange(0,hg_1.h1)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t1 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 2</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h2" @change="onHeaterSetpointChange(1,hg_1.h2)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t2 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 3</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h3" @change="onHeaterSetpointChange(2,hg_1.h3)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t3 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 4</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h4" @change="onHeaterSetpointChange(3,hg_1.h4)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t4 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 5</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h5" @change="onHeaterSetpointChange(4,hg_1.h5)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t5 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 6</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h6" @change="onHeaterSetpointChange(5,hg_1.h6)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t6 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 7</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h7" @change="onHeaterSetpointChange(6,hg_1.h7)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t7 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 8</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h8" @change="onHeaterSetpointChange(7,hg_1.h8)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t8 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 9</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h9" @change="onHeaterSetpointChange(8,hg_1.h9)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t9 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Heater 10</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h10" @change="onHeaterSetpointChange(9,hg_1.h10)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t10 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Amp Top Heater</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h11" @change="onHeaterSetpointChange(10,hg_1.h11)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t11 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Amp Bot Heater</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h12" @change="onHeaterSetpointChange(11,hg_1.h12)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t12 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Showerhead Heater</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h13" @change="onHeaterSetpointChange(12,hg_1.h13)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t13 }} °C</div>
            </div>
            <div class="ManualControl__panel">
                <div class="Panel__name">Heating Group 1: Substrate Heater</div>
                <div class="Panel__setpoint"><input v-model.number="hg_1.h14" @change="onHeaterSetpointChange(13,hg_1.h14)" type="number" value="200"> <span class="Panel__unit">°C</span></div>
                <div class="Panel__stats">Actual: {{ hg_1.t14 }} °C</div>
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

    .ManualControl
        display: grid
        grid-template: 1fr / 1fr 1fr 1fr 1fr
        grid-gap: 2em
        grid-auto-rows: 1fr
        margin-bottom: 3em

        &--switches
            grid-template: 1fr / 1fr 1fr 1fr 1fr

        &__panel
            border-radius: 5px
            padding: 1em
            background-color: rgba(68, 70, 79, 0.5)

            &--zone
                color: white
                background-color: rgba(246,168,33, 0.9)

            &--switch
                display: flex
                flex-direction: row


    .Panel

        &__name
            font-size: .75em

        &__setpoint
            color: white
            font-weight: bold
            font-size: 1.75em
            margin-bottom: .25em

        &__stats
            font-size: .75em
            margin: .25em 0

        &__switch
            display: flex

        &__switch-state
            margin-left: 1em

        &--switch

            .Panel__name
                font-size: 1em
                font-weight: bold
                flex-grow: 1

    input
        border: none
        display: inline
        font-family: inherit
        font-size: inherit
        padding: 0
        width: 2em
        background: none
        outline: 0
        color: white
        font-weight: bold

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button
        /* display: none; <- Crashes Chrome on hover */
        -webkit-appearance: none
        margin: 0 /* <-- Apparently some margin are still there even though it's hidden */


    .switch input
        position: absolute
        opacity: 0

    .switch
        display: inline-block
        font-size: 20px
        height: 1em
        width: 2em
        background: #BDB9A6
        border-radius: 1em

    .switch div
        height: 1em
        width: 1em
        border-radius: 1em
        background: #FFF
        box-shadow: 0 0.1em 0.3em rgba(0,0,0,0.3)
        -webkit-transition: all 300ms

    .switch input:checked + div
        background: rgba(246,168,33, 0.9)
        -webkit-transform: translate3d(100%, 0, 0)

</style>

<script>

    export default {
        data() {
            return {
                mfc1: {
                    sp: 0,
                    fr: 0
                },
                hg_1: {
                    ha: 0,
                    h1: 0,
                    h2: 0,
                    h3: 0,
                    h4: 0,
                    h5: 0,
                    h6: 0,
                    h7: 0,
                    h8: 0,
                    h9: 0,
                    h10: 0,
                    h11: 0,
                    h12: 0,
                    h13: 0,
                    h14: 0,
                    ta: 0,
                    t1: 0,
                    t2: 0,
                    t3: 0,
                    t4: 0,
                    t5: 0,
                    t6: 0,
                    t7: 0,
                    t8: 0,
                    t9: 0,
                    t10: 0,
                    t11: 0,
                    t12: 0,
                    t13: 0,
                    t14: 0
                },
                hg_2: {
                    ha: 0,
                    h1: 0,
                    h2: 0,
                    h3: 0,
                    h4: 0,
                    h5: 0,
                    h6: 0,
                    h7: 0,
                },
                port: {},
                port2: {}
            }
        },

        methods: {
            // Disabled until a queue system is developed.
            onGroupChange(o) {
                // for (const i in o) {
                //     o[i] = o.ha
                // }
                // this.write(String(o.ha))
            },
            onHeaterSetpointChange(i,v) {
                if (i < 10 && v > 150) {
                    v = 125;
                }
                console.log("<"+i+","+v+">")
                this.write("<"+i+","+v+">")
            },
            onMfcChange() {
                const n = Math.round(((this.mfc1.sp - 1)/0.411))
                const out = n.toString()
                console.log(out)
                this.write2(out)
            },
            poll() {
                const Readline = this.$serial.parsers.Readline;
                this.port = new this.$serial('COM5', {
                    baudRate: 9600,
                });
                const parser = new Readline();
                this.port.pipe(parser);
                const $this = this
                parser.on('data', function(data){
                    let array = data.split(',');
                    // console.log(array);
                    if (array.length == 15) {
                        $this.hg_1.t1 = parseFloat(array[0])
                        $this.hg_1.t2 = parseFloat(array[1])
                        $this.hg_1.t3 = parseFloat(array[2])
                        $this.hg_1.t4 = parseFloat(array[3])
                        $this.hg_1.t5 = parseFloat(array[4])
                        $this.hg_1.t6 = parseFloat(array[5])
                        $this.hg_1.t7 = parseFloat(array[6])
                        $this.hg_1.t8 = parseFloat(array[7])
                        $this.hg_1.t9 = parseFloat(array[8])
                        $this.hg_1.t10 = parseFloat(array[9])
                        $this.hg_1.t11 = parseFloat(array[10])
                        $this.hg_1.t12 = parseFloat(array[11])
                        $this.hg_1.t13 = parseFloat(array[12])
                        $this.hg_1.t14 = parseFloat(array[13])
                        $this.hg_1.ta = $this.average(array)
                    }
                    //console.log(data)
                });
            },
            poll2() {
                const Readline = this.$serial.parsers.Readline;
                this.port2 = new this.$serial('COM6', {
                    baudRate: 9600,
                });
                const parser = new Readline();
                this.port2.pipe(parser);
                const $this = this
                parser.on('data', function(data){
                    $this.mfc1.fr = (parseFloat(data) / 5 * 100).toFixed(2)
                    // console.log(data)
                });
            },
            write(n) {
                n += '\n';
                this.port.write(n, function(err) {
                  if (err) {
                    return console.log('Error on write: ', err.message);
                  }
                  console.log('message written');
                });
            },
            write2(n) {
                this.port2.write(n, function(err) {
                  if (err) {
                    return console.log('Error on write: ', err.message);
                  }
                  console.log('message written');
                });
            },
            average(a) {
                var sum = 0;
                for (var i = 0; i < a.length - 1; i++) {
                    sum += parseFloat(a[i])
                }
                return (sum/a.length).toFixed(2)
            }
        },
        beforeMount(){
            this.poll()
            this.poll2()
        },
    }

</script>