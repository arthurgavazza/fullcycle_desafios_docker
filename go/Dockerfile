FROM golang:1.17 AS builder

WORKDIR /go/src/app

COPY go.mod .
#COPY go.sum .
RUN go mod download

COPY *.go ./

RUN go build -o /go/bin/app

##
## Deploy
##

FROM scratch

WORKDIR /

COPY --from=builder /go/bin/app /

#USER nonroot:nonroot

ENTRYPOINT ["/app"]