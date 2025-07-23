/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function showNumber(n: number,b:number): void {
        let font: number[] = [488162862,    // 0
                              146935950,    // 1
                              487635487,    // 2
                              1008141870,   // 3
                              73747426,     // 4
                              1057949230,   // 5
                              71779886,     // 6
                              1041305864,   // 7
                              488064558,    // 8
                              488159368];   // 9
        let num1,num2,num3:number;
        num1=Math.trunc(n/100);
        num2= Math.trunc(n/10) % 10;
        num3=n%10;

        for (let j = 1; j < 7; j++) {
            for (let i = 0; i < 5; i++) {
                scrollbit.setPixel(i, j, ((font[num1] >> (34 - (j * 5 + i))) % 2) * b);
            }
        }
        for (let j = 1; j < 7; j++) {
            for (let i = 0; i < 5; i++) {
                scrollbit.setPixel(i + 6, j, (font[num2] >> (34 - (j * 5 + i)) & 1) * b);
            }
        }
        for (let j = 1; j < 7; j++) {
            for (let i = 0; i < 5; i++) {
                scrollbit.setPixel(i + 12, j, (font[num3] >> (34 - (j * 5 + i)) & 1) * b);
            }
        }
    }
}
