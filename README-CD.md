# CD Project Overview
## Semantec Versioning
  - Better utilize version control by implementing github tags.
- How to generate a `tag` in `git` / GitHub
  - Create a new realese and specify a tag following semantic versioning.
- Behavior of GitHub workflow
  - what does it do
    - YML file that provides a set of instructions to be run after an event (scheduled, manula, commit, tags)
- Link to Docker Hub repository (as additional proof)
  -  [DockerHub](https://hub.docker.com/repository/docker/bwheels00/3120-project4/general)

## Deployment
- How to install Docker to your instance
  - `snap install docker`
- Container restart script
  - Stops and removes the old container. Pulls the latest image and runs it.
  - automates updating to a new version of the image.
  - I would want it in the home directory
- Setting up a `webhook` listener on the instance
  - How to install [adnanh's `webhook`](https://github.com/adnanh/webhook) to the instance
- `webhook` task definition file
  - Description of what it does
  - Where it should be on the instance (if someone were to use your setup)
  - ADD your webhook definition file to your repository
- How to start the `webhook`
- How to modify/ create a webhook service file such that your webhook listener is listening as soon as the system is booted
    - include commands to reload the service respective to files changed (webhook service file versus hook definition file)
    - ADD your webhook service file to your repository
- How to configure GitHub OR DockerHub to message the listener
- Provide proof that the CI & CD workflow work.  This means:
  1. starting with a `commit` that is a change, `tag`ing the `commit`, `push`ing the `tag`
  2. Showing your GitHub workflow returning a message of success.
  3. Showing DockerHub has freshly pushed images.
  4. Showing the instance that you are deploying to has webhook logs indicating the payload was recieved and the container has updated.