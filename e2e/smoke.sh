#!/bin/bash
# smoke-test.sh

BASE="http://localhost"

check() {
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$1")
    if ["$STATUS" = "$2"]; then
        echo "PASS $1 -> $STATUS"
    else
        echo "FAIL $1 -> esperado $2, recebeu $STATUS"
        exit 1
    fi
}

check "$BASE/health" 200
check "$BASE/api" 200
check "$BASE/nao-existe" 404