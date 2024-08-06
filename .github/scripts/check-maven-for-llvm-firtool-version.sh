#!/usr/bin/env bash

VERSION="$1"

POM="https://repo1.maven.org/maven2/org/chipsalliance/llvm-firtool/$VERSION/llvm-firtool-$VERSION.pom"

# Return 1 if not found
curl -o/dev/null -sfIL $POM || false
