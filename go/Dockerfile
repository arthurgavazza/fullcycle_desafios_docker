FROM golang:1.17 AS builder

WORKDIR /go/src/app

COPY go.mod .

RUN go mod download

COPY *.go ./

RUN go build -o /go/bin/app

FROM scratch

WORKDIR /

COPY --from=builder /go/bin/app /

ENTRYPOINT ["/app"]