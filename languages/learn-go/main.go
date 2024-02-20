package main

import "fmt"

func main() {
	// tipe data
	name := "John Doe"
	age := 20
	isMerried := false
	hobbies := [...]string{
		"eating",
		"sleeping",
		"coding",
	}
	// data array tidak bisa dirubah ukurannya

	// slice
	// tipe data yang bisa dirubah ukurannya
	dataSlice := []string{"a", "b", "c"}

	fmt.Println(len(name), age, isMerried, hobbies, dataSlice)
}
