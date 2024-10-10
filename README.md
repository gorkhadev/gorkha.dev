# Gorkha Dev Platform 

Repository for [Gorkha Dev platform](https://gorkha.dev) website.

# Run via Docker command

Run the following command:

```
docker run -d --name gorkhadev -p 4000:4000 -v $(pwd):/site bretfisher/jekyll-serve
```

To stop the container run as:

```
docker stop gorkhadev
```

Then, to start the container again for development in later days, run as:

```
docker start gorkhadev
```

