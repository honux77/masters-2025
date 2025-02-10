import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Test

class MainKtTest {
    @Test
    @DisplayName("임의의 10진수를 2진수 문자열로 변환")
    fun dec2binTest() {
        assertEquals("00000000", dec2bin(0))
        assertEquals("00000001", dec2bin(1))
        assertEquals("00000010", dec2bin(2))
        assertEquals("00000011", dec2bin(3))
        assertEquals("00000100", dec2bin(4))
        assertEquals("00000101", dec2bin(5))
        assertEquals("10101010", dec2bin(170))
        assertEquals("11111111", dec2bin(255))
    }

    @Test
    @DisplayName("임의의 2진수 문자열을 10진수로 변환")
    fun bin2decTest() {
        assertEquals(0, bin2dec("00000000"))
        assertEquals(1, bin2dec("00000001"))
        assertEquals(2, bin2dec("00000010"))
        assertEquals(3, bin2dec("00000011"))
        assertEquals(4, bin2dec("00000100"))
        assertEquals(5, bin2dec("00000101"))
        assertEquals(170, bin2dec("10101010"))
        assertEquals(255, bin2dec("11111111"))
    }
}