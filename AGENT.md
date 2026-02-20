# RAWG Video Games Database CLI - Agent Guide

## For AI Agents

This is a production-ready CLI for RAWG Video Games Database.

### Installation

```bash
npm install -g @ktmcp-cli/rawg
```

### Configuration

Before using, configure the API key:

```bash
rawg config set --api-key YOUR_API_KEY
```

### JSON Output

All commands support `--json` flag for machine-readable output. Use this when automating tasks.

```bash
rawg <command> --json
```

### Error Handling

- Exit code 0 = success
- Exit code 1 = error
- Errors are written to stderr

### Tips

- Always use `--json` flag for parsing output
- Pipe JSON output to `jq` for filtering
- Check exit codes in scripts
