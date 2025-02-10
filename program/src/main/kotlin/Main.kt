fun main() {
    println("Hello World!")
    for(i in 0..32) {
        //String format ## -> ########
        println("${"%03d".format(i)} -> ${dec2bin(i)}")
    }
}

fun dec2bin(dec: Int): String{
    //binList를 false * 8로 초기화
    val binList = MutableList(8){0}
    var number = dec
    var idx = 0
    while (number >= 1) {
        binList.set(binList.size - idx - 1, number % 2)
        number /= 2
        idx++
    }
    return binList.joinToString("")
}

fun bin2dec(bin: String): Int {
    var dec = 0
    var n = 1
    for(i in 7 downTo 0) {
        dec += (bin[i] - '0') * n
        n *= 2
    }
    return dec
}

