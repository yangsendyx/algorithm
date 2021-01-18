#!/bin/bash

index="03";
path=$1;
name=$2;

input="./${index}/java/${path}/*.java";
output="./${index}/build/${path}";

if [ ! -d "${output}" ]; then
  mkdir ${output}
fi

javac ${input} -d ${output} -Xlint:unchecked
cd "./${index}/build/${path}"
java ${name}