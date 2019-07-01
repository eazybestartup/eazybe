#builder
FROM ruby:2.5.3 as builder

RUN apt-get update && apt-get install -y supervisor

COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

EXPOSE 3000

WORKDIR /eazybe-api
ADD . /eazybe-api

# ARG CI_JOB_TOKEN

ARG RAILS_ENV

ENV RAILS_ENV=production

ENV KARAFKA_ENV=production

ENV RAILS_MASTER_KEY=dcc30edcc6452dea8a63f4473c300ca6

# ENV RAILS_RELATIVE_URL_ROOT="/eazybe-api"

RUN gem update bundler

RUN bundle install

# CMD ["rails", "server", "-b", "0.0.0.0"]

CMD ["/usr/bin/supervisord"]