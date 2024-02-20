FROM python:3.9 as requirements-stage

WORKDIR /tmp

RUN pip install poetry

COPY ./pyproject.toml ./poetry.lock* /tmp/

RUN poetry export -f requirements.txt --output requirements.txt --without-hashes

FROM python:3.9

WORKDIR /config/backend

COPY --from=requirements-stage /tmp/requirements.txt /config/backend/requirements.txt

RUN pip install --no-cache-dir --upgrade -r /config/backend/requirements.txt

COPY . /config/backend

EXPOSE 5657

CMD ["python", "-m", "main.py"]